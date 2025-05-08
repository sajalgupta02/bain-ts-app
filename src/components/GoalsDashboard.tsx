import { Box, Typography, Button, Tooltip } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import "./style.css";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import GoalsAccordion from "./GoalsAccordion";
import { useNavigate } from "react-router-dom";
import ReusableStepper from "./ReusableStepper";
import { useCallback, useState } from "react";
import EvaluateSmartScoreDialog from "./dialogs/EvaluateSmartScoreDialog";
import { getIndianFinancialYearDates } from "../reusables/utils";
import {
  CREATE_GOAL,
  NOT_PUBLISHED,
  OVERALL_SMART_SCORE,
  PUBLISH_TO_SF,
  PUBLISHED,
  SMART_SCORE,
  WEIGHT,
} from "../reusables/textData";

const GoalDashboard = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [openEvaluateGoalDialog, setOpenEvaluateGoalDialog] = useState(false);
  const [isPublishBtnClicked, setIsPublishBtnClicked] = useState(false);
  const [publishToSFActive, setPublishToSFActive] = useState(false);

  const [goals, setGoals] = useState([
    { score: 7, weight: 20 },
    { score: 8, weight: 20 },
    { score: 9, weight: 30 },
    { score: 8, weight: 30 },
  ]);

  let navigate = useNavigate();

  const navigateToCreateGoal = () => {
    navigate("/createGoal", { state: { goalsData: goals } });
  };

  const handlePublishToggle = useCallback(
    (newValue: boolean) => {
      setIsPublishBtnClicked(newValue);
    },
    [] // Empty dependency array (setter is stable)
  );

  const evaluateSmartScore = () => {
    setActiveStep(1);
    setOpenEvaluateGoalDialog(true);
  };

  const publishToSF = () => {
    setActiveStep(2);
  };

  const totalWeight = goals.reduce((sum, goal) => sum + goal.weight, 0);
  const { startDate, endDate } = getIndianFinancialYearDates();
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;

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
              Individual Goals {currentYear} - {nextYear}
            </Typography>
            <Typography className="headingDate">
              {startDate} - {endDate}
            </Typography>
          </Box>

          <Box display="flex" gap={2}>
            <Button
              className="createGoalBtn btnCss"
              variant="contained"
              onClick={navigateToCreateGoal}
            >
              {CREATE_GOAL}
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
              <AutoAwesomeIcon fontSize="small" /> &nbsp; {SMART_SCORE}
            </Button>
            <Button
              disabled={!publishToSFActive}
              onClick={publishToSF}
              className="publishBtn btnCss"
              variant="outlined"
            >
              {PUBLISH_TO_SF}
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
              <span>{NOT_PUBLISHED}</span>
            </Typography>
            <Typography className="goalStatus">
              <span className="circleGoal">0</span>
              <span>{PUBLISHED}</span>
            </Typography>
          </Box>
          <Box display="flex" gap={"20px"}>
            <Typography className="goalStatus">
              <span className="percentage">{totalWeight}%</span>
              <span>{WEIGHT} </span>
            </Typography>
            <Box className="goalStatus" sx={{ marginTop: "4px" }}>
              <span className="percentage">- -</span>
              <span>
                {OVERALL_SMART_SCORE} &nbsp;
                <Tooltip title="This score is only available when total weight is 100%">
                  <InfoOutlinedIcon fontSize="small" color="action" />
                </Tooltip>
              </span>
            </Box>
          </Box>
        </Box>
        <GoalsAccordion goals={goals} setGoals={setGoals} />
      </Box>
      {openEvaluateGoalDialog && (
        <EvaluateSmartScoreDialog
          openEvaluateGoalDialog={openEvaluateGoalDialog}
          setOpenEvaluateGoalDialog={setOpenEvaluateGoalDialog}
          isPublishBtnClicked={isPublishBtnClicked}
          setIsPublishBtnClicked={handlePublishToggle}
          publishToSFActive={publishToSFActive}
          setPublishToSFActive={setPublishToSFActive}
        />
      )}
    </>
  );
};

export default GoalDashboard;
