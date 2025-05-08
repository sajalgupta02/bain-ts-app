import { Typography, Card, CardContent, Box } from "@mui/material";

type Props = {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  setFormData: React.Dispatch<
    React.SetStateAction<{
      category: string;
      goalName: string;
      measureOfSuccess: string;
      weight: number;
      startDate: string;
      endDate: string;
      target: string;
    }>
  >;
  setMilestones: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        milestone: string;
        plannedDate: string;
        achievementDate: string;
      }[]
    >
  >;
};

const GoalCardForLibraryCreationGoal = ({
  setActiveStep,
  setFormData,
  setMilestones,
}: Props) => {
  const singleCardClicked = () => {
    setActiveStep(1);
    setFormData((prev) => ({
      ...prev,
      goalName: "Goal name for library/plan",
      measureOfSuccess: "Measure of success for library/plan",
      target: "Target for library/plan",
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

export default GoalCardForLibraryCreationGoal;
