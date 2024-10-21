import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Card from "./components/Card.jsx";
import Form from "./components/Form.jsx";

function App() {
  const [posts, setPosts] = useState(JSON.parse(localStorage.getItem("posts")) || []);

  // Fetch the post data
  useEffect(() => {
    fetch("http://localhost:8080/Server-1.0-SNAPSHOT/api/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // Sort data by date
        data.sort((a, b) => {
          return new Date(b.createdOn) - new Date(a.createdOn);
        });
        if (posts !== null && posts !== undefined && !posts.length) {
          console.log("Loaded from API");
          setPosts(data);
          localStorage.setItem("posts", JSON.stringify(data));
        } 
      });
  }, []);

  return (
      <>
        <div className="content flex py-2">
          <img className="w-48 h-48" src="/LOGO.webp" alt="Logo"/>
          <h1 className="text-5xl font-bold my-5 text-blue-600">MESH Social Media</h1>
        </div>

        <div>
          <div>
            <div className="max-w-7xl mx-auto grid grid-cols-12">
              <div className="col-span-4">
              <Form/>
              </div>

              <div className="col-span-8 ">
                <div className="p-2 grid grid-cols-1 gap-x-3">
                  <div className="rounded p-5">
                    {posts?.map((post) => {
                      return (
                          <div
                              key={post?.id}
                              className="bg-white rounded shadow border p-6 mb-3 hover:scale-105 transition duration-200"
                          >
                            <a href={`/posts/${post?.id}`}>
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
                            </a>
                          </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              {/* <div className="col-span-1"></div> */}
            </div>
          </div>
        </div>
      </>
  );
}

export default App;
