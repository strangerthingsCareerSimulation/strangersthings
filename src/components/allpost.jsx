import React from "react";
import { useEffect, useState } from "react";

const COHORT_NAME = "2302-acc-pt-web-pt-b";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${BASE_URL}/posts`);

        const result = await response.json();
        console.log(result);
        setPosts(result.data.posts);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPosts();
  }, []);
  return (
    <>
      <div>
        <h1>All Posts</h1>
        {posts.map((post) => (
          <div key={post._id}>
            <h2>title: {post.title}</h2>
            <p>description: {post.description}</p>
            <p>price: {post.price}</p>
            <p>location: {post.location}</p>

            
          </div>
        ))}
      </div>
    </>
  );
}

export default AllPosts;
