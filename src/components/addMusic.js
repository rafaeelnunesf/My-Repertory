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
import { useParams } from "react-router-dom";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddMusic({ open, setOpen }) {
  const [formData, setFormData] = useState({ name: "", author: "" });
  const { token } = useAuth();
  const { setPostNewRepertory, postNewRepertory } = useRepertory();
  const { repertoryId } = useParams();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  const handleClose = () => {
    setOpen(false);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (!formData.name) {
      return alert("Name can't be empty");
    }
    if (!formData.author) {
      return alert("Author can't be empty");
    }

    try {
      await api.postMusic(formData, token, repertoryId);
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
              Add a new music
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
        <Box
          sx={{
            padding: " 0 40px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <InputText
            id="name"
            type="text"
            value={formData.name}
            changeHandler={handleChange}
            placeholder="music name"
            label="Name"
          />
          <InputText
            id="author"
            type="text"
            value={formData.author}
            changeHandler={handleChange}
            placeholder="author name"
            label="Author"
          />
        </Box>
      </Dialog>
    </Box>
  );
}
