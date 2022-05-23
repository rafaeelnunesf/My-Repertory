import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  Divider,
} from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../components/Container";
import useAuth from "../../hooks/useAuth";
import useRepertory from "../../hooks/useRepertory";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import api from "../../services/api";
import SpeedDialTooltip from "../../components/SpeedDialRepertory";
import Header from "../../components/Header";
import dayjs from "dayjs";
export default function Home() {
  const { token } = useAuth();
  let navigate = useNavigate();
  const { repertories, setRepertories, postNewRepertory } = useRepertory();

  useEffect(() => {
    if (!token) {
      navigate("/sign-in");
    }
  }, []);

  useEffect(() => {
    getRepertories();
  }, [postNewRepertory]);

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

  return (
    <Container>
      <Header />
      <Divider variant="middle" sx={{ borderWidth: "1px", width: "100%" }} />
      <Box
        sx={{
          marginTop: "50px",
          width: "100%",
          maxHeight: "100%",
          overflow: "scroll",
          height: "100%",
        }}
      >
        {repertories.length === 0 ? (
          <h1>No repertory registered yet</h1>
        ) : (
          repertories.map(({ musics, id, name }) => {
            const arr = [];
            musics.forEach(({ lastTimePlayed }) => {
              const date = dayjs(lastTimePlayed).format("DD-MM");
              arr.push(date);
            });
            return (
              <Accordion key={id}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography fontWeight="bold">{name}</Typography>
                </AccordionSummary>
                <AccordionDetails
                  onClick={() => navigate(`/repertories/${id}`)}
                  sx={{ cursor: "pointer" }}
                >
                  <p>Songs: {musics.length}</p>
                  <p>Last time played: {bigger(arr)}</p>
                </AccordionDetails>
              </Accordion>
            );
          })
        )}
      </Box>
      <SpeedDialTooltip repertories={repertories}></SpeedDialTooltip>
    </Container>
  );
}
