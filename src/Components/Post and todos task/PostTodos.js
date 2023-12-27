import React, { useState } from "react";
import Post from "./Post";
import Todos from "./Todos";
import { Routes, Route, Link, NavLink } from "react-router-dom";
const PostTodos = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: 30,
          fontWeight: 600,
        }}
      >
        <Link
          style={{ textDecoration: "none", margin: 8, color: "#EA5455" }}
          to="/post"
        >
          POST
        </Link>
        <Link
          style={{ textDecoration: "none", margin: 8, color: "#BE6DB7" }}
          to="/todos"
        >
          TODOS
        </Link>
      </div>
      <hr style={{ border: "2px solid green" }} />
      <Routes>
        <Route path="post" element={<Post />} />
        <Route path="todos" element={<Todos />} />
      </Routes>
    </>
  );
};

export default PostTodos;
