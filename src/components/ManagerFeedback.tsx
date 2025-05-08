import { Box,  Typography } from "@mui/material";

export default function ManagerFeedback() {
  return (
    <Box sx={{ margin: "25px 0 0 220px", fontWeight: 700 }}>
      <Typography>
        You have a disapproved goal from your manager. Please edit and re
        publish your goals.
      </Typography>
      <Box
        sx={{ background: "#E6F8F4", maxWidth: "1350px", marginTop: "20px" }}
      >
        <h4 style={{ color: "#003F72" }}>Comments from Manager</h4>
        <Typography sx={{ color: "#003F72" }}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
          faucibus ex sapien vitae pellentesque sem placerat. Lorem ipsum dolor
          sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
          pellentesque sem placerat. Lorem ipsum dolor sit amet consectetur
          adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem
          placerat.
        </Typography>
      </Box>
    </Box>
  );
}
