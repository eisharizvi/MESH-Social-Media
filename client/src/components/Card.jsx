import React from "react";

/**
 * General card component that should display all necessary Post information
 * @param {string} comment - The text content of the post or comment.
 * @param {string} id - The unique identifier of the post or comment.
 * @param {number} views - The number of views for the post or comment.
 * @param {number} likes - The number of likes for the post or comment.
 * @param {string} username - The username of the author of the post or comment.
 * @param {string} email - The email address of the author of the post or comment.
 * @param {string} createdOn - The date when the post or comment was created, in a format that can be parsed by JavaScript's Date object.
 */
const Card = ({ comment, id, views, likes, username, email, createdOn }) => {
  return (
    <>
      <h5 className="text-xl font-bold mt-0 text-left">{username}</h5>
      <h5 className="text-md font-light mb-4 mt-0 text-left">{email}</h5>
      <p className="text-gray-700 text-sm text-left mb-5 ">{comment}</p>
      <div className="content-center my-1 h-full justify-items-auto grid grid-cols-3 w-full gap-1">
        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
          {createdOn.substring(0, 10)}
        </span>
        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-green-600/20">
          {likes.toLocaleString("en")} Likes
        </span>
        <span className="inline-flex items-center rounded-md bg-fuchsia-50 px-2 py-1 text-xs font-medium text-fuchsia-700 ring-1 ring-inset ring-green-600/20">
          {views.toLocaleString("en")} Views
        </span>
      </div>
    </>
  );
};

export default Card;
