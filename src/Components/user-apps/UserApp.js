import axios from "axios";

import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import MuiDatatable from "mui-datatables";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddEditUser from "./AddEditUser";
import UserContext from "./UserContext";
import Swal from "sweetalert2";
import UserService from "./UserService";
import APIS from "../../api/APIS";

const UserApp = () => {
  const [users, setUsers] = useState([]);
  const [operation, setOperation] = useState("add");
  const [openDialog, setOpenDialog] = useState(false);
  const [initialUser, setInitialUser] = useState({});
  const handleDialogClose = () => {
    setOpenDialog(false);
  };
  //fetch all users on component mounting and store in the state

  const loadUsers = async () => {
    // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    // const data = await response.json();
    // setUsers(data);
    // const data = await response.json();

    const response = await axios.get("http://localhost:9999/users"); // IF we use API then don't need to use http://localhost:8080  this part
    // if (response.data) setUsers(response?.data);
    console.log("Response:", response.data);
    setUsers(response?.data);
  };
  // invoke loadUsers() on mounting

  useEffect(() => {
    loadUsers();
  }, []);

  // add the user
  const addUser = () => {
    setOperation("add");

    setInitialUser({
      title: "",
      age: "",
      mobile: "",
      city: "",
    });
    setOpenDialog(true);
  };

  // update(edit) the user
  const editUser = (user) => {
    //here we pass user object
    setOperation("edit");
    setInitialUser(user);
    setOpenDialog(true);
  };
  //delete the user
  const deleteUser = (id) => {
    // here we just pass id

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        UserService.deleteUse(id)
          .then((response) => {
            loadUsers();
            Swal.fire("Deleted!", "The User has not been deleted.", "success");
          })

          .catch((err) => {
            console.error(err);
            Swal.fire("Deleted!", "The User has not been deleted.", "error");
          });
      }
    });
  };
  const columns = [
    {
      label: "ID",
      name: "id",
      options: {
        sort: false, //unique value cannot be modify id is unique
        filter: false,
      },
    },

    {
      label: "Title",
      name: "title",
      options: {
        sort: true, //unique value cannot be modify id is unique
        filter: false,
      },
    },

    {
      label: "Age",
      name: "age",
      options: {
        sort: true, //unique value cannot be modify id is unique
        filter: false,
      },
    },

    {
      label: " Mobile",
      name: "mobile",
      options: {
        sort: true, //unique value cannot be modify id is unique
        filter: false,
      },
    },

    {
      label: "City",
      name: "city",
      options: {
        sort: true, //unique value cannot be modify id is unique
        filter: false,
      },
    },

    {
      label: "Action",
      name: "action",
      options: {
        sort: false, //unique value cannot be modify id is unique
        filter: false,
        customBodyRenderLite: (index) => {
          //we get row index
          // return custom column ui
          const user = users[index];
          return (
            <>
              <IconButton color="primary" onClick={() => editUser(user)}>
                <EditIcon />
              </IconButton>

              <IconButton color="error" onClick={() => deleteUser(user?.id)}>
                <DeleteIcon />
              </IconButton>
            </>
          );
        },
      },
    },
  ];
  return (
    <>
      {/* <h3>User App</h3> */}

      <UserContext.Provider
        value={{
          open: openDialog,
          handleDialogClose,
          operation,
          initialUser,
          loadUsers,
        }}
      >
        <AddEditUser />
      </UserContext.Provider>

      <Button onClick={addUser} variant="contained">
        New +
      </Button>
      <MuiDatatable title="user-list" data={users} columns={columns} />
    </>
  );
};

export default UserApp;
