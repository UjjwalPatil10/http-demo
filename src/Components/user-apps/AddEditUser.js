import React, { useContext } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import UserContext from "./UserContext";
import UserForm from "./UserForm";

const AddEditUser = () => {
  //Dialog is in material
  const { open, handleDialogClose, operation } = useContext(UserContext);
  return (
    <Dialog open={open} onClose={handleDialogClose}>
      <DialogTitle>
        {operation == "edit" ? "Edit User" : "Add User"}
      </DialogTitle>
      <DialogContent>
        <UserForm />
      </DialogContent>
    </Dialog>
  );
};

export default AddEditUser;
