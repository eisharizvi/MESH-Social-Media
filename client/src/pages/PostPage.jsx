import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

/**
 * This component uses state to manage the post data and updates the URL slug
 * based on the post ID. It fetches the post data from the GlassFish Server's API
 * and renders the post information on the page
 */
const PostPage = () => {
  const { id } = useParams();

  const posts = JSON.parse(localStorage.getItem("posts"));
  const post = posts?.find((p) => p?.id === parseInt(id));

  useEffect(() => {
    console.log("hello");
    console.log(post);
  }, []);

  return (
    <>
      <div className="bg-white rounded shadow border p-6 mb-3 hover:scale-105 transition duration-200 mt-10">
        <Card
          comment={post?.comment}
          createdOn={post?.createdOn}
          email={post?.email}
          id={post?.id}
          likes={post?.likes}
          username={post?.username}
          views={post?.views}
          key={post?.id}
        />
      </div>
      <div className="mt-10 hover:scale-105 transition duration-200">
        <a href="/" className="bg-gray-300 mt-10 px-20 py-5 rounded-xl">Back</a>
      </div>
    </>
  );
};

export default PostPage;
