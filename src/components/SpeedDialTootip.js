import {
  Backdrop,
  Box,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from "@mui/material";
import { useState } from "react";
import AddRepertory from "./AddRepertory";
import AddIcon from "@mui/icons-material/Add";
export default function SpeedDialTooltip({ repertories }) {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState({});
  const [showRepertoryModal, setShowRepertoryModal] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        height: 330,
        transform: "translateZ(0px)",
        flexGrow: 1,
        alignSelf: "flex-end",
      }}
    >
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleClickOpen}
        open={open}
      >
        <SpeedDialAction
          icon={<AddIcon />}
          tooltipTitle="Add Repertory"
          tooltipOpen
          onClick={() => setShowRepertoryModal(true)}
        />
      </SpeedDial>
      {showRepertoryModal && (
        <AddRepertory
          open={showRepertoryModal}
          setOpen={setShowRepertoryModal}
        />
      )}
    </Box>
  );
}
