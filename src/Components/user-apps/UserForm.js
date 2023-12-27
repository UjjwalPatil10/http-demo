import React, { useContext } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import UserContext from "./UserContext";
import axios from "axios";
import APIS from "../../api/APIS";
import UserService from "./UserService";

const UserForm = () => {
  const { operation, initialUser, handleDialogClose, loadUsers } =
    useContext(UserContext);
  const { register, handleSubmit } = useForm({
    defaultValues: initialUser,
  });

  const handleUser = (user) => {
    console.log("Handle..", user);
    if (operation === "edit") {
      // Existing code for updating a user
      UserService.updateUser(initialUser?.id, user)
        .then((response) => {
          handleDialogClose();
          loadUsers();
          alert("User Updated...");
        })
        .catch((err) => {
          console.error(err);
          alert("User not Updated");
        });
    } else {
      // Modified code for creating a new user
      UserService.createUser(user)
        .then((response) => {
          handleDialogClose();
          loadUsers();
          alert("User created...");
        })
        .catch((err) => {
          console.error(err);
          alert("User not created...");
        });
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit((data) => handleUser(data))}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="title"
              {...register("title")}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Mobile"
              {...register("mobile")}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              type="number"
              label="Age"
              {...register("age")}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="city"
              {...register("city")}
            />
          </Grid>

          <Grid item xs={12}>
            <Button fullWidth variant="contained" type="submit">
              {operation === "edit" ? "Update" : "Create"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default UserForm;
