package com.otu.server;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

/**
 * This class handles the search functionality for the social media application.
 * It is responsible for searching through posts based on a search term.
 */
public class SearchEngine {
    // The directory path where the posts are stored. This needs to be updated to the deployment environment's path.
    private static final String DIRECTORY_PATH = "src/main/resources/posts";

    /**
     * Searches for posts matching the given search term.
     *
     * @param searchTerm The search term to filter posts.
     * @return A list of Post objects that match the search criteria.
     * @throws Exception if there is an error reading the posts or processing the search.
     */
    public List<Post> search(String searchTerm) throws Exception {
        // Retrieve all posts from the specified directory.
        List<Post> allPosts = PostUtils.parsePostsFromFolder(DIRECTORY_PATH);
        // Filter the posts based on the search term and return the results.
        return filterPosts(allPosts, searchTerm);
    }

    /**
     * Filters a list of posts based on a search term. It supports exact phrase matches when the term is quoted,
     * or matching all words if the term is not quoted.
     *
     * @param posts      The list of posts to search through.
     * @param searchTerm The search term, which may be an exact phrase or a set of words.
     * @return A filtered list of posts that match the search term.
     */
    private List<Post> filterPosts(List<Post> posts, String searchTerm) {
        // The final search term used for filtering. It is determined by whether the search term indicates an exact match.
        final String finalSearchTerm;
        boolean exactMatch = searchTerm.startsWith("\"") && searchTerm.endsWith("\"");
        if (exactMatch) {
            // If the term is quoted, remove the quotes for an exact phrase match.
            finalSearchTerm = searchTerm.substring(1, searchTerm.length() - 1);
        } else {
            // If not quoted, use the original search term which may contain multiple words for partial matching.
            finalSearchTerm = searchTerm;
        }

        // Filter the posts based on the search criteria using a stream and return the list of matching posts.
        return posts.stream()
                .filter(post -> {
                    if (exactMatch) {
                        // For an exact match, check if the post's comment contains the exact phrase.
                        return post.getComment().contains(finalSearchTerm);
                    } else {
                        // For a non-exact match, ensure all words in the search term are present in the post's comment.
                        return Arrays.stream(finalSearchTerm.split("\\s+"))
                                .allMatch(word -> post.getComment().contains(word));
                    }
                })
                .collect(Collectors.toList()); // Collect the results into a list and return.
    }
}