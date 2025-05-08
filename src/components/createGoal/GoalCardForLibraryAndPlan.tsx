import { Typography, Card, CardContent } from "@mui/material";

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
      variant="outlined"
      sx={{
        borderRadius: 2,
        width: "450px",
        cursor: "pointer",
        overflowX: "auto",
      }}
    >
      <CardContent>
        <Typography variant="h5" mt={1} fontWeight="bold">
          Goal name examples
        </Typography>
        <Typography mt={1} sx={{ color: "#003F72", fontWeight: 700 }}>
          Measure of success: &nbsp; xxxxxxxxxxx
        </Typography>
        <Typography mt={1} sx={{ color: "#003F72", fontWeight: 700 }}>
          Target: &nbsp; xxxxxxxxxxxxxxx
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GoalCardForLibraryCreationGoal;
