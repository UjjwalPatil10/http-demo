import React, { useContext } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import UserForm from "./UserForm";
import UserContext from "./UserContext";
const AddEditUser = () => {
  const { open, handleDialogClose, operation } = useContext(UserContext);
  return (
    <Dialog open={open} onClose={handleDialogClose}>
      <DialogTitle>{operation == "edit" ? "Edit" : "Add"} User</DialogTitle>
      <DialogContent>
        <UserForm />
      </DialogContent>
    </Dialog>
  );
};

export default AddEditUser;
