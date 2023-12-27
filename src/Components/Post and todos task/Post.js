import axios from "axios";
import React, { useEffect, useState } from "react";

const Post = () => {
  const [users, setUsers] = useState([]);
  const postLoader = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    if (response?.data) setUsers(response?.data);
  };

  useEffect(() => {
    postLoader();
  }, []);
  return (
    <>
      <h2 className="d-flex justify-content-center align-items-center text-primary">
        Post
      </h2>
      <section
        className="container"
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {Array.isArray(users) &&
          users?.map(({ id, title, body, userId }) => (
            <div
              key={id}
              style={{
                width: 250,
                margin: 5,
                padding: 5,
                border: "2px solid cyan",
                borderRadius: 12,
              }}
            >
              <h4>{id}</h4>
              <h4 style={{ color: "orange" }}>{title}</h4>
              <p>{body}</p>
            </div>
          ))}
      </section>
    </>
  );
};

export default Post;
