import axios from "axios";
import React, { useEffect, useState } from "react";

const Todos = () => {
  const [users, setUsers] = useState([]);
  const todosLoader = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    if (response?.data) setUsers(response?.data);
  };

  useEffect(() => {
    todosLoader();
  }, []);
  return (
    <>
      <h3 className="d-flex justify-content-center text-info">Todos</h3>
      <section
        className="container"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {Array.isArray(users) &&
          users?.map(({ id, title, completed, userId }) => (
            <div
              key={id}
              style={{
                width: 200,
                margin: 5,
                padding: 5,
                border: "2px solid red",
                borderRadius: 12,
              }}
            >
              <h4>{id}</h4>
              <h4 style={{ color: "chocolate" }}>{title}</h4>
              <p>{completed}</p>
            </div>
          ))}
      </section>
    </>
  );
};

export default Todos;
