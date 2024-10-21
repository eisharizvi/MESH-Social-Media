package com.otu.server;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.QueryParam;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.io.IOException;
import java.util.List;
import java.util.logging.Logger;

/**
 * This class provides the web services for accessing social media posts.
 * It handles HTTP GET requests to fetch all posts and to search for posts with specific query terms.
 */
@Path("/posts")
public class SocialMediaResource {

    // Logger to log server-side messages for debugging and monitoring purposes
    private static final Logger logger = Logger.getLogger(SocialMediaResource.class.getName());

    // Instance of SearchEngine to handle search operations
    private final SearchEngine searchEngine = new SearchEngine();

    /**
     * Responds to HTTP GET requests to retrieve all posts.
     * The method produces a JSON response containing all the posts.
     *
     * @return A Response object containing the list of posts or an error message.
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getPosts() {
        try {
            // Fetch the list of all posts from the specified folder
            List<Post> posts = PostUtils.parsePostsFromFolder("/posts");

            // Build and return a successful response with the posts data
            return Response.ok(posts).build();
        } catch (IOException e) {
            // Log the exception and build an Internal Server Error response
            logger.severe("Failed to read posts: " + e.getMessage());
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).build();
        }
    }

    /**
     * Responds to HTTP GET requests to search for posts that match a given query.
     * The search can be for a specific phrase or for posts containing all the words in the query.
     *
     * @param query The search query provided by the user.
     * @return A Response object containing the search results or an error message.
     */
    @Path("/search")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response searchPosts(@QueryParam("query") String query) {
        try {
            // Perform the search using the provided query term
            List<Post> results = searchEngine.search(query);

            // Build and return a successful response with the search results
            return Response.ok(results).build();
        } catch (Exception e) {
            // Log the exception and build an Internal Server Error response
            logger.severe("Search failed: " + e.getMessage());
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).build();
        }
    }
}