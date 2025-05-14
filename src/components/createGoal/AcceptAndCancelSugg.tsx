import { AutoAwesome } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

type acceptSuggProps = {
  goalNameSugg: string;
  measureOfSuccessSugg: string;
};

type formProps = {
  category: string;
  goalName: string;
  measureOfSuccess: string;
  weight: number;
  startDate: string;
  endDate: string;
  target: string;
};

type showSuggProps = {
  goalNameBox: boolean;
  measureOfSuccessBox: boolean;
};

export default function AcceptAndCancelSugg({
  acceptSugg,
  type,
  setFormData,
  formData,
  settingSuggBox,
  showingSuggBox,
}: {
  acceptSugg: acceptSuggProps;
  type: string;
  setFormData: React.Dispatch<React.SetStateAction<formProps>>;
  formData: formProps;
  settingSuggBox: React.Dispatch<React.SetStateAction<showSuggProps>>;
  showingSuggBox: showSuggProps;
}) {
  const acceptChanges = () => {
    if (type === "measureOfSuccess") {
      setFormData({ ...formData, [type]: acceptSugg.measureOfSuccessSugg });
      settingSuggBox({ ...showingSuggBox, measureOfSuccessBox: false });
    } else {
      setFormData({ ...formData, [type]: acceptSugg.goalNameSugg });
      settingSuggBox({ ...showingSuggBox, goalNameBox: false });
    }
  };

  const cancelChanges = () => {
    if (type === "measureOfSuccess") {
      settingSuggBox({ ...showingSuggBox, measureOfSuccessBox: false });
    } else {
      settingSuggBox({ ...showingSuggBox, goalNameBox: false });
    }
  };

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
        {type === "measureOfSuccess"
          ? acceptSugg.measureOfSuccessSugg
          : acceptSugg.goalNameSugg}
      </Typography>
      <Box display={"flex"} gap={2} justifyContent={"flex-end"}>
        <Button
          onClick={acceptChanges}
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
          onClick={cancelChanges}
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
