import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { forwardRef, useState } from "react";
import InputText from "./InputText";
import { Box } from "@mui/material";
import api from "../services/api";
import useAuth from "../hooks/useAuth.js";
import useRepertory from "../hooks/useRepertory.js";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddRepertory({ open, setOpen }) {
  const [formData, setFormData] = useState({ name: "" });
  const { token } = useAuth();
  const { setPostNewRepertory, postNewRepertory } = useRepertory();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  const handleClose = () => {
    setOpen(false);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (!formData.name) {
      return alert("Nome não pode ser vazio");
    }

    try {
      await api.postRepertory(formData, token);
      setOpen(false);
      setPostNewRepertory(!postNewRepertory);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <Box>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative", marginBottom: "50px" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Add a new repertory
            </Typography>
            <Button
              autoFocus
              color="inherit"
              type="submit"
              onClick={handleSubmit}
            >
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Box sx={{ padding: " 0 40px" }}>
          <InputText
            id="name"
            type="text"
            value={formData.name}
            changeHandler={handleChange}
            placeholder="repertory name"
            label="Name"
          />
        </Box>
      </Dialog>
    </Box>
  );
}
