import { AutoAwesome, AutoFixHigh } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function KRALoadingState() {
  return (
    <Box
      sx={{
        minWidth: "800px",
        border: "1px solid #964DEA",
        minHeight: "200px",
        borderRadius: "10px",
        padding: "10px !important",
      }}
    >
      <Box sx={{ color: "#5F1EA3" }}>
        <AutoAwesome fontSize="small" /> &nbsp;
        <strong>KRA Assistant</strong>
      </Box>
      <Box
        sx={{
          textAlign: "center",
          marginTop: "50px",
          color: "#5F1EA3",
        }}
      >
        <AutoFixHigh fontSize="large" />
      </Box>
      <Box
        sx={{
          textAlign: "center",
          marginTop: "30px",
          color: "#5F1EA3",
        }}
      >
        Accessing overall SMART score, please wait...
      </Box>
    </Box>
  );
}
