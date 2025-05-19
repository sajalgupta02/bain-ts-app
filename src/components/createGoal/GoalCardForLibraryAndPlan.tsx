import { Typography, Card, CardContent, Box } from "@mui/material";
import { MainContext } from "../RootComp";
import { useContext } from "react";

type Props = {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
};

const GoalCardForLibraryAndPlan = ({ setActiveStep }: Props) => {
  const { setFormData, setMilestones } = useContext(MainContext);

  const singleCardClicked = () => {
    setActiveStep(1);
    setFormData((prev: any) => ({
      ...prev,
      goalName: "Goal name for plan",
      measureOfSuccess: "Measure of success for plan",
      target: "Target for plan",
    }));
    setMilestones([]);
  };

  return (
    <Card
      onClick={singleCardClicked}
      className="hoverOnCard"
      variant="outlined"
      sx={{
        borderRadius: 2,
        width: "49%",
        cursor: "pointer",
        overflowX: "auto",
      }}
    >
      <CardContent>
        <Typography variant="h5" mt={1} fontWeight="bold">
          Goal name examples
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Typography mt={1} sx={{ color: "#003F72", fontWeight: 700 }}>
            Measure of success: &nbsp;
          </Typography>
          <Typography mt={1} sx={{ color: "#003F72" }}>
            xxxxxxxxxxxxxxxxxxxx...
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography mt={1} sx={{ color: "#003F72", fontWeight: 700 }}>
            Target: &nbsp;
          </Typography>
          <Typography mt={1} sx={{ color: "#003F72" }}>
            xxxxxxxxxxxxxxxxxxxx...
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default GoalCardForLibraryAndPlan;
