import { AutoAwesome } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

export default function AcceptAndCancelSugg() {
  return (
    <Box
      sx={{
        background: "white",
        fontSize: "24px",
        color: "#5F1EA3",
        marginTop: "0",
        borderTop: "none",
        padding: "10px",
        backgroundColor: "#F3EDFF",
      }}
    >
      <Typography fontWeight={900}>
        <AutoAwesome fontSize="small" /> &nbsp; KRA Assistant
      </Typography>
      <Typography fontWeight={500}>
        The score is based on lorem ipsum dolor sit amet consectetur adipiscing
        elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. Please
        see the detailed suggestions below and make edits.
      </Typography>
      <Box display={"flex"} gap={2} justifyContent={"flex-end"}>
        <Button
          style={{
            borderRadius: "20px",
            background: "#003F72",
            color: "white",
          }}
          variant="contained"
        >
          Accept Suggestion
        </Button>
        <Button
          style={{
            borderRadius: "20px",
            background: "white",
            border: "1px solid #003F72",
            color: "#003F72",
          }}
          variant="outlined"
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
}
