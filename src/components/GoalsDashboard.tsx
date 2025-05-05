import { Box, Typography, Button, Tooltip } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import "./style.css";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import GoalsAccordion from "./GoalsAccordion";
import { useNavigate } from "react-router-dom";
import ReusableStepper from "./ReusableStepper";
import { useState } from "react";
import EvaluateSmartScoreDialog from "./dialogs/EvaluateSmartScoreDialog";

const GoalDashboard = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [evaluateBtnClicked, setEvaluateBtnClicked] = useState(false);

  const [goals, setGoals] = useState([
    { score: 7, weight: 20 },
    { score: 8, weight: 20 },
    { score: 9, weight: 30 },
    { score: 8, weight: 30 },
  ]);

  let navigate = useNavigate();

  const navigateToCreateGoal = () => {
    navigate("/createGoal");
  };

  const evaluateSmartScore = () => {
    setActiveStep(1);
    setEvaluateBtnClicked(true);
  };

  const publishToSF = () => {
    setActiveStep(2);
  };

  const totalWeight = goals.reduce((sum, goal) => sum + goal.weight, 0);

  return (
    <>
      <ReusableStepper activeStep={activeStep} />
      <Box sx={{ height: "100%", backgroundColor: "#F4F6F8" }}>
        <Box
          sx={{ backgroundColor: "white" }}
          display="flex"
          justifyContent={"space-between"}
          p={4}
        >
          <Box>
            <Typography className="heading">
              Individual Goals 2024 - 25
            </Typography>
            <Typography className="headingDate">
              1 Apr 2024 - 31 Mar 2025
            </Typography>
          </Box>

          <Box display="flex" gap={2}>
            <Button
              className="createGoalBtn btnCss"
              variant="contained"
              onClick={navigateToCreateGoal}
            >
              Create Goal
            </Button>
            <Button
              disabled={totalWeight !== 100}
              onClick={evaluateSmartScore}
              className={`smartScoreBtn btnCss ${
                totalWeight === 100
                  ? "smartScoreBtnOn100"
                  : "smartScoreBtnNotOn100"
              }`}
            >
              <AutoAwesomeIcon fontSize="small" /> &nbsp; Evaluate overall SMART
              score
            </Button>
            <Button
              onClick={publishToSF}
              className="publishBtn btnCss"
              variant="outlined"
            >
              Publish to Success Factors
            </Button>
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          pt={4}
          pl={4}
          pr={4}
          sx={{ backgroundColor: "white" }}
        >
          <Box display={"flex"} gap={"10px"}>
            <Box
              display={"flex"}
              alignItems={"center"}
              gap={"31px"}
              flexDirection={"column"}
            >
              <Typography className="totalGoals">4 Goals</Typography>
              <Box className="horizontalLine" />
            </Box>
            <Typography className="verticalLine" />
            <Typography className="goalStatus">
              <span className="circleGoal">4</span>
              <span>Not Published </span>
            </Typography>
            <Typography className="goalStatus">
              <span className="circleGoal">0</span>
              <span>Published </span>
            </Typography>
          </Box>
          <Box display="flex" gap={"20px"}>
            <Typography className="goalStatus">
              <span className="percentage">{totalWeight}%</span>
              <span>Weight (Total) </span>
            </Typography>
            <Box className="goalStatus" sx={{ marginTop: "4px" }}>
              <span className="percentage">- -</span>
              <span>
                Overall SMART Score &nbsp;
                <Tooltip title="This score is only available when total weight is 100%">
                  <InfoOutlinedIcon fontSize="small" color="action" />
                </Tooltip>
              </span>
            </Box>
          </Box>
        </Box>
        <GoalsAccordion goals={goals} setGoals={setGoals} />
      </Box>
      {evaluateBtnClicked && (
        <EvaluateSmartScoreDialog
          evaluateBtnClicked={evaluateBtnClicked}
          setEvaluateBtnClicked={setEvaluateBtnClicked}
        />
      )}
    </>
  );
};

export default GoalDashboard;
