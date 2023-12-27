import React from "react";
import axios from "axios";
const AxiosDemo = () => {
  const fetchUsers = async () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // response.data is the response body
        console.log("Data:", response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const createUser = async () => {
    //post request
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      {
        name: "Topper Skills",
        age: 5,
        city: "pune",
      }
    );
    console.log("Data:", response.data);
  };

  const updateUser = async () => {
    //put request
    const response = await axios.put(
      "https://jsonplaceholder.typicode.com/users/2",
      {
        name: "Topper Skills",
        age: 5,
        city: "pune",
      }
    );
    console.log("Data:", response.data);
  };

  const deleteUser = async () => {
    //delete request
    const response = await axios.delete(
      "https://jsonplaceholder.typicode.com/users/3"
    );
    console.log("Data:", response.data);
  };

  return (
    <>
      <button onClick={fetchUsers}>Fetch User</button>
      <button onClick={createUser}>Create User</button>
      <button onClick={updateUser}>Update User</button>
      <button onClick={deleteUser}>Delete User</button>
    </>
  );
};

export default AxiosDemo;
