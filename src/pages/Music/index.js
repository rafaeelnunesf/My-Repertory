import { Box, Typography } from "@mui/material";
import dayjs from "dayjs";
import { useNavigate, useParams } from "react-router-dom";
import Container from "../../components/Container";
import Header from "../../components/Header";
import SubmitButton from "../../components/SubmitButton";
import Tabs from "../../components/Tablaturas";
import useAuth from "../../hooks/useAuth";
import useRepertory from "../../hooks/useRepertory";
import api from "../../services/api";

export default function Music() {
  const { music, setMusic } = useRepertory();
  const { repertoryId, musicId } = useParams();
  const { token } = useAuth();
  let navigate = useNavigate();
  if (music === undefined) return <h1>Loading...</h1>;
  async function handleClick(e) {
    e.preventDefault();
    try {
      await api.updateMusic(token, repertoryId, musicId);
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container>
      <Header />
      <Box onClick={handleClick}>
        <SubmitButton>Mark as practiced</SubmitButton>
      </Box>
      <Tabs textHtml={music.tab} />
    </Container>
  );
}
