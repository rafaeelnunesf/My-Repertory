import { Box, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
export default function Header() {
  let navigate = useNavigate();
  return (
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
      <ArrowBackIosNewIcon
        sx={{ cursor: "pointer" }}
        onClick={() => navigate(-1)}
      />
    </Box>
  );
}
