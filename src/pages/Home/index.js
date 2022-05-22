import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  Divider,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../components/Container";
import useAuth from "../../hooks/useAuth";
import useRepertory from "../../hooks/useRepertory";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import api from "../../services/api";
import SpeedDialTooltip from "../../components/SpeedDialTootip";
export default function Home() {
  const { token } = useAuth();
  let navigate = useNavigate();
  const { repertories, setRepertories } = useRepertory([]);

  useEffect(() => {
    if (!token) {
      navigate("/sign-in");
    }
  }, []);

  useEffect(() => {
    getRepertories();
  }, [repertories]);

  async function getRepertories() {
    try {
      const { data } = await api.getRepertories(token);
      setRepertories(data);
    } catch (error) {
      console.log(error);
    }
  }

  function bigger(array) {
    let maior = array[0];
    for (let i = 1; i < array.length; i++)
      if (array[i] > maior) maior = array[i];
    return maior;
  }
  if (repertories.length === 0) return <h1>Ola</h1>;
  return (
    <Container>
      <Box
        sx={{
          width: "100%",
          padding: "0 40px 0 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          component="span"
          sx={{ alignSelf: "flex-start", fontStyle: "italic" }}
        >
          Your Repertories
        </Typography>
        <ArrowBackIosNewIcon />
      </Box>
      <Divider variant="middle" sx={{ borderWidth: "1px", width: "100%" }} />
      <Box sx={{ marginTop: "50px", width: "100%" }}>
        {repertories.map((rep) => {
          const arr = [];
          rep.musics.forEach(({ lastTimePlayed }) => arr.push(lastTimePlayed));
          return (
            <Accordion sx={{ backgroundColor: "#FFF" }} key={rep.id}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography fontWeight="bold">{rep.name}</Typography>
              </AccordionSummary>
              <AccordionDetails onClick={() => console.log("ksjhdksdhg")}>
                <p>Songs: {rep.musics.length}</p>
                <p>Last time played: {bigger(arr)}</p>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
      <SpeedDialTooltip repertories={repertories}></SpeedDialTooltip>
    </Container>
  );
}
