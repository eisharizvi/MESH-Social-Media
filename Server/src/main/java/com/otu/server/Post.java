package com.otu.server;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Represents a social media post with various attributes such as username, comment, etc.
 */
public class Post {

    // Fields corresponding to the properties of a Post in JSON
    private int id;
    private String username;
    private String email;
    private String createdOn;
    private String comment;
    private int likes;
    private int views;

    public Post() {
        // Jackson can use this empty constructor
    }

    /**
     * Constructor with arguments annotated with @JsonCreator to indicate that
     * Jackson can use it for deserialization with properties specified by @JsonProperty.
     *
     * @param id        the unique identifier of the post
     * @param username  the username of the person who created the post
     * @param email     the email of the person who created the post
     * @param createdOn the creation date of the post
     * @param comment   the content of the post
     * @param likes     the number of likes on the post
     * @param views     the number of views of the post
     */
    @JsonCreator
    public Post(@JsonProperty("id") int id,
                @JsonProperty("username") String username,
                @JsonProperty("email") String email,
                @JsonProperty("createdOn") String createdOn,
                @JsonProperty("comment") String comment,
                @JsonProperty("likes") int likes,
                @JsonProperty("views") int views) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.createdOn = createdOn;
        this.comment = comment;
        this.likes = likes;
        this.views = views;
    }

    // Getter methods to access the private fields
    public int getId() {
        return id;
    }
    public String getUsername() {
        return username;
    }
    public String getEmail() {
        return email;
    }
    public String getCreatedOn() {
        return createdOn;
    }
    public String getComment() {
        return comment;
    }
    public int getLikes() {
        return likes;
    }
    public int getViews() {
        return views;
    }
}