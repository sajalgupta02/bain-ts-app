import { Box } from "@mui/material";
import { MainContext } from "../../RootComp";
import { useContext } from "react";
import GoalCardForLibraryAndPlan from "../GoalCardForLibraryAndPlan";

type Props = {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
};

export default function GoalsDisplaySection({ setActiveStep }: Props) {
  const { goalsForLibraryAndPlan } = useContext(MainContext);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "space-between",
      }}
    >
      {goalsForLibraryAndPlan.map((goal: any, index: number) => (
        <GoalCardForLibraryAndPlan key={index} setActiveStep={setActiveStep} />
      ))}
    </Box>
  );
}
