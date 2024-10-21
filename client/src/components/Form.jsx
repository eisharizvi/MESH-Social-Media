import React, { useState } from "react";

const initialState = {
  username: "",
  email: "",
  comment: "",
};

/**
 * A form component for creating a new post. 
 * Handles various state such as form fields, and current posts.
 */
const Form = () => {
  const [formData, setFormData] = useState(initialState);
  const [posts, setPosts] = useState(JSON.parse(localStorage.getItem("posts")));

  const handleSubmit = (e) => {
    e.preventDefault();
    const newForm = { ...formData, createdOn: new Date().toISOString() };
    console.log(newForm);

    try {
      // handle submitting post to API
      fetch("http://localhost:8080/Server-1.0-SNAPSHOT/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newForm),
      }).then((response) => {
        if (response.ok) {
          console.log("POST request successful");
        } else {
          console.error("POST request failed");
        }
        return response.json();
      }).then(data => {
        console.log(data);
        const likes = randomInterval(50,50000);
        const views = randomInterval(10000,5000000);

        const newPost = { ...formData, likes, views, createdOn: new Date().toISOString() }

        let currentPosts = [...posts, newPost];
        
        currentPosts.sort((a, b) => {
            return new Date(b.createdOn) - new Date(a.createdOn);
        });
        
        setPosts(currentPosts);
        
        console.log(currentPosts);

        // localStorage.clear();
        localStorage.setItem("posts", JSON.stringify(currentPosts));

      }).catch(err => {
        console.error(err);
      })
    } catch (error) {
      // Do something with the error
    } finally {
      e.target.username.value = "";
      e.target.email.value = "";
      e.target.comment.value = "";
    }

    setFormData(initialState);
  };

  function randomInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form
        method="POST"
        className="flex flex-col w-full bg-white rounded shadow border mt-7 p-6 mb-3"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-bold">Submit a post!</h1>
        <label
          htmlFor="username"
          className="text-lg md:text-xl font-semibold mt-3 text-left pb-2"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="e.g., johndoe111"
          className="p-2 border-2 rounded-md bg-transparent mb-5"
          onChange={handleChange}
        />

        <label
          htmlFor="email"
          className="text-lg md:text-xl font-semibold text-left pb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="e.g., john.doe@example.com"
          className="p-2 mb-5 border-2 rounded-md bg-transparent"
          onChange={handleChange}
        />

        <label
          htmlFor="comment"
          className="text-lg md:text-xl font-semibold text-left pb-2"
        >
          Comment
        </label>
        <textarea
          id="comment"
          name="comment"
          rows="5"
          className="p-4 mb-5 border-2 rounded-md bg-transparent"
          onChange={handleChange}
        />

        <button
          type="submit"
          className="p-4 mt-5 hover:scale-105 active:scale-95 transition duration-200 rounded-lg bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md text-lg md:text-xl font-semibold"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
