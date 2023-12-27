import axios from "axios";
import React, { useEffect, useState } from "react";
// import { async } from "regenerator-runtime";
const UserListing = () => {
  const [users, setUsers] = useState([]);
  const loadUsers = async (page = 1) => {
    const response = await axios.get(
      `https://reqres.in/api/users?page=${page}`
    );

    console.log("Response data:", response);

    if (response?.data?.data) setUsers(response?.data?.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <>
      <h3>User Listing</h3>
      <button onClick={() => loadUsers(1)}>Page 1</button>
      <button onClick={() => loadUsers(2)}>Page 2</button>
      <section style={{ display: "flex", flexWrap: "wrap" }}>
        {Array.isArray(users) &&
          users?.map(({ id, avatar, first_name, last_name, email }) => (
            <div
              key={id}
              style={{
                width: 200,
                margin: 5,
                padding: 5,
                border: "1px solid #9999",
              }}
            >
              <img src={avatar} alt="" style={{ width: "100%", height: 200 }} />
              <h4>
                {first_name}
                {last_name}
              </h4>
              <p>{email}</p>
            </div>
          ))}
      </section>
    </>
  );
};

export default UserListing;
