import { Box } from "@mui/system";

const style = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  width: "300px",
  marginTop: "50px",
};

export default function Form({ children, onSubmit }) {
  return (
    <Box sx={style} component="form" onSubmit={onSubmit}>
      {children}
    </Box>
  );
}
