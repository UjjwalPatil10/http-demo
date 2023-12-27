import React, { useContext, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import UserContext from "./UserContext";
import UserService from "./UserService";

const UserForm = () => {
  const { operation, initialUser, loadUsers, handleClose } =
    useContext(UserContext);
  // const [user, setUser] = useState({});
  const { register, handleSubmit } = useForm({
    defaultValues: initialUser,
  });

  const handleUser = (data, e) => {
    console.log("User:", data);
    if (operation === "edit") {
      UserService.updateUser(data)
        .then((response) => {
          handleClose();
          loadUsers();
          alert("User updated");
        })
        .catch((err) => {
          console.error(err);
          alert("Could not updated...");
        });
    } else {
      UserService.createUser(data)
        .then((response) => {
          console.log("Response:", response);
          alert("User created");
        })
        .catch((err) => {
          console.error(err);
          alert("Could not created...");
        });
    }
  };
  return (
    <Container component="form" onSubmit={handleSubmit(handleUser)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            label="Name"
            {...register("name")}
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
            label="Email"
            type="email"
            {...register("email")}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            label="Password"
            type="password"
            {...register("password")}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Gender
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              {...register("gender")}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" type="submit">
            {operation == "edit" ? "update" : "create"}
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserForm;
