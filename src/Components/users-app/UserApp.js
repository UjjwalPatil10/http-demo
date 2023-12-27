import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import UserContext from "./UserContext";
import UserService from "./UserService";
import Swal from "sweetalert2";
import APIS from "../../api/APIS";
import AddEditUser from "../user-apps/AddEditUser";
const defaultUser = {
  name: "",
  mobile: "",
  email: "",
  password: "",
  gender: "",
};
const UserApp = () => {
  const [users, setUsers] = useState([]);
  const [operation, setOperation] = useState("add");

  const [openDialog, setOpenDialog] = useState(false);

  const [initialUser, setInitialUser] = useState(defaultUser);

  const handleDialogClose = () => {
    setOpenDialog(false);
  };
  //fetch all users
  const loadUsers = async () => {
    const response = await APIS.get(); // IF we use API then don't need to use http://localhost:8080  this part
    if (response.data) setUsers(response?.data?.data);
    console.log("Response:", response);
  };

  //initial loading
  useEffect(() => {
    loadUsers();
  }, []);

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
  const editUser = (user) => {
    setInitialUser(user);
    setOperation("edit");
    setOpenDialog(true);
  };
  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      UserService.deleteUser(id)
        .then((response) => {
          if (result.confirmed) {
            loadUsers();
            Swal.fire("Deleted!", "The User has not been deleted.", "success");
          }
        })

        .catch((err) => {
          console.error(err);
          Swal.fire("Deleted!", "The User has not been deleted.", "error");
        });
    });
  };
  const columns = [
    {
      label: "Name",
      name: "name",
    },

    {
      label: "Mobile",
      name: "mobile",
    },
    {
      label: "Email",
      name: "email",
    },
    {
      label: "Gender",
      name: "gender",
    },
    {
      label: "Action",
      name: "action",
      options: {
        customBodyRenderLite: (index) => {
          // perform quick operations/in that we cannot perform filter for that we use customBodyRender
          const user = users[index];
          return (
            <>
              <IconButton color="primary" onclick={() => editUser(user)}>
                <EditIcon />
              </IconButton>
              <IconButton color="error" onclick={() => deleteUser(user._id)}>
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
      {/* here we do CRUD operations without redux  */}
      <Button variant="contained" onClick={addUser}>
        New +
      </Button>
      <MUIDataTable title="User List" columns={columns} data={users} />
    </>
  );
};

export default UserApp;
