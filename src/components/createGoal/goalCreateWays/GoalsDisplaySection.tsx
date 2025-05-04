import { Box } from "@mui/material";
import GoalCardForLibraryCreationGoal from "../GoalCardForLibraryAndPlan";

const goals = [
  { score: 7, weight: 5 },
  { score: 8, weight: 20 },
  { score: 7, weight: 5 },
  { score: 8, weight: 20 },
];

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

export default function GoalsDisplaySection({
  setActiveStep,
  setFormData,
  setMilestones,
}: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "space-between",
      }}
    >
      {goals.map((goal, index) => (
        <GoalCardForLibraryCreationGoal
          key={index}
          setActiveStep={setActiveStep}
          setFormData={setFormData}
          setMilestones={setMilestones}
        />
      ))}
    </Box>
  );
}
