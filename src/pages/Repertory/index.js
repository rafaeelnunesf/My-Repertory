import {
  Avatar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Tooltip,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Container from "../../components/Container";
import Header from "../../components/Header";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";
import DeleteIcon from "@mui/icons-material/Delete";
import FolderIcon from "@mui/icons-material/Folder";
import LyricsIcon from "@mui/icons-material/Lyrics";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import dayjs from "dayjs";
import SpeedDialTooltipMusic from "../../components/SpeedDialMusic";
import useRepertory from "../../hooks/useRepertory";
export default function Repertory() {
  const [musics, setMusics] = useState([]);
  const { token } = useAuth();
  const { setPostNewRepertory, postNewRepertory, setMusic } = useRepertory();
  const { repertoryId } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    getMusics();
  }, [postNewRepertory]);

  async function getMusics() {
    try {
      const { data } = await api.getMusics(token, repertoryId);
      setMusics(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete(musicId) {
    try {
      await api.deleteMusic(token, repertoryId, musicId);
      setPostNewRepertory(!postNewRepertory);
    } catch (error) {
      console.log(error);
    }
  }

  function handleSelectMusic(music) {
    setMusic(music);
    navigate(`music/${music.id}`);
  }
  return (
    <Container>
      <Header />
      <Box sx={{ width: "100%" }}>
        <List>
          {musics.map(({ music, lastTimePlayed, timesplayed }) => {
            const date = dayjs(lastTimePlayed).format("DD-MM");

            return (
              <ListItem
                secondaryAction={
                  <Box sx={{ display: "flex", gap: "5px" }}>
                    <Tooltip title="Tab">
                      <IconButton
                        edge="end"
                        aria-label="tab"
                        onClick={() => handleSelectMusic(music)}
                      >
                        <QueueMusicIcon />
                      </IconButton>
                    </Tooltip>
                    {/* <Tooltip title="Lyrics">
                      <IconButton edge="end" aria-label="lyrics">
                        <LyricsIcon />
                      </IconButton>
                    </Tooltip> */}
                    <Tooltip title="Delete">
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => handleDelete(music.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </Box>
                }
              >
                {/*  <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar> */}
                <ListItemText
                  primary={`${music.name} / ${music.author}`}
                  secondary={`Last time played: ${date} Times played: ${timesplayed}`}
                />
              </ListItem>
            );
          })}
        </List>
      </Box>
      <SpeedDialTooltipMusic />
    </Container>
  );
}
