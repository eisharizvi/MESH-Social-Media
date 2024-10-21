package com.otu.server;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.io.InputStream;
import java.net.URISyntaxException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * Utility class for parsing Post objects from JSON files.
 */
public class PostUtils {

    /**
     * Reads all JSON files from the given folder and parses them into Post objects.
     *
     * @param folderPath The classpath-relative path to the folder containing JSON files.
     * @return A list of Post objects parsed from the JSON files.
     * @throws IOException If there is an error reading files or parsing JSON.
     */
    public static List<Post> parsePostsFromFolder(String folderPath) throws IOException {
        List<Post> posts = new ArrayList<>();
        ObjectMapper mapper = new ObjectMapper();

        // Resolve the folder path to a URI and walk through the file tree
        try (Stream<Path> paths = Files.walk(Path.of(Objects.requireNonNull(PostUtils.class.getResource(folderPath)).toURI()))) {
            // Filter to obtain a list of regular files (ignoring directories)
            List<Path> files = paths.filter(Files::isRegularFile).collect(Collectors.toList());

            // Iterate over each file
            for (Path file : files) {
                // Open each file as an InputStream
                try (InputStream is = PostUtils.class.getResourceAsStream(folderPath + "/" + file.getFileName().toString())) {
                    // Read the JSON content as an array of Post objects
                    Post[] postArray = mapper.readValue(is, Post[].class);
                    // Add all posts to the list
                    posts.addAll(Arrays.asList(postArray));
                }
            }
        } catch (URISyntaxException e) {
            // Convert the URISyntaxException to an IOException
            throw new IOException("Invalid URI for folder path", e);
        }
        return posts;
    }
}