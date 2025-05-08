import { Box, Button, Typography } from "@mui/material";

export default function PublishSuccess() {
  return (
    <Box sx={{ margin: "25px 0 0 220px", fontWeight: 700 }}>
      <Typography>
        Thank you for publishing your goals to MyZone. You will be redirected to
        MyZone to submit your goals to IS.
      </Typography>
      <Button
        sx={{
          marginTop: "10px",
          background: "#003F72",
          borderRadius: "20px",
        }}
        variant="contained"
      >
        Go To MyZone
      </Button>
    </Box>
  );
}
