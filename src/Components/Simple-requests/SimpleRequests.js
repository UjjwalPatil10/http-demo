import React from "react";

// HTTP Requests

//  1. post request:-
//       Post request is used to transfer data from client to server

//       Post request transfers the data in the request body therefore sensitive data client username
//       and password will be transferred using post request.

//       login, registration, file uploading,etc will be performed with post request.

// 2. get request:-
//     the get request does not have body therefore data will be transferred through
//     URL

//     get request is used when you want to fetch the data from server

//     When you make get request then server do not modify any resource, it just returns the
//     data as response.

// 3. put request:-
//   it is used to update the full resource at server side

// 4. patch request:-
//   it is used to update the resource partially

// 5. delete request:-
//   It is used to delete a resource from server.
const SimpleRequests = () => {
  const fetchUsers = async () => {
    // fetch api
    // get request is default
    // fetch("https://jsonplaceholder.typicode.com/users")
    // fetch("https://jsonplaceholder.typicode.com/users", { method: "get" }).then(
    //   (response) => {
    //     response
    //       .json()
    //       .then((data) => {
    //         console.log("Data: ", data);
    //       })
    //       .catch((error) => {
    //         console.error(error);
    //       });
    //   }
    // );

    //using async await
    //fetch is work like get(bydefault get)
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log("Data: ", data);
  };

  const createUser = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "post",
      body: JSON.stringify({ name: "Topper Skills", city: "Dhule" }),
    });
    const data = await response.json();
    console.log("Data: ", data);
  };

  const updateUser = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/2",
      {
        method: "put",
        body: JSON.stringify({ name: "Topper Skills", city: "Dhule" }),
      }
    );
    const data = await response.json();
    console.log("Data: ", data);
  };

  const deleteUser = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/2",
      {
        method: "delete",
        body: JSON.stringify({ name: "Topper Skills", city: "Dhule" }),
      }
    );
    const data = await response.json();
    console.log("Data: ", data);
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

export default SimpleRequests;
