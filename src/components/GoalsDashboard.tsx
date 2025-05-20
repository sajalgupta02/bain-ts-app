import { Box, Typography, Button, Tooltip } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import "./style.css";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import GoalsAccordion from "./GoalsAccordion";
import { useNavigate } from "react-router-dom";
import ReusableStepper from "./ReusableStepper";
import { useContext, useState } from "react";
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
import PublishSuccess from "./PublishSuccess";
import ManagerFeedback from "./ManagerFeedback";
import RecommendTrainingsDialog from "./dialogs/RecommendTrainingsDialog";
import { MainContext } from "./RootComp";

const GoalDashboard = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [openEvaluateGoalDialog, setOpenEvaluateGoalDialog] = useState(false);
  const [
    openTrainingRecommendationDialog,
    setOpenTrainingRecommendationDialog,
  ] = useState(false);

  const [isPublishAnywayBtnClicked, setIsPublishAnywayBtnClicked] =
    useState(false);

  const [publishToSFActiveBtn, setPublishToSFActiveBtn] = useState(false);
  // const [isPublishSuccessFul, setIsPublishSuccessFul] = useState(false);
  // const [isManagerFeedbackAvailable, setIsManagerFeedbackAvailable] =
  //   useState(false);

  const { goals } = useContext(MainContext);

  let navigate = useNavigate();

  const navigateToCreateGoal = () => {
    // navigate("/createGoal", { state: { goalsData: goals } });
    navigate("/createGoal");
  };

  // const handlePublishToggle = useCallback(
  //   (newValue: boolean) => {
  //     setIsPublishAnywayBtnClicked(newValue);
  //   },
  //   [] // Empty dependency array (setter is stable)
  // );

  const evaluateSmartScore = () => {
    setActiveStep(1);
    setOpenEvaluateGoalDialog(true);
    setIsPublishAnywayBtnClicked(false);
    setPublishToSFActiveBtn(false);
  };

  const publishToSF = () => {
    setActiveStep(2);
    setPublishToSFActiveBtn(false);
  };

  const totalWeight = () => {
    let finalWeight = 0;
    for (let goal of goals) {
      let temp = goal.goals.reduce(
        (initialSum: any, individualGoal: any) =>
          initialSum + individualGoal.weight,
        0
      );
      finalWeight += temp;
    }
    return finalWeight;
  };

  console.log(totalWeight());

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
              disabled={totalWeight() !== 100}
              onClick={evaluateSmartScore}
              className={`normalBtnCSS btnCss ${
                totalWeight() === 100
                  ? "smartScoreBtnOn100"
                  : "smartScoreBtnNotOn100"
              }`}
            >
              <AutoAwesomeIcon fontSize="small" /> &nbsp; {SMART_SCORE}
            </Button>
            <Button
              disabled={!publishToSFActiveBtn}
              onClick={publishToSF}
              className={`normalBtnCSS btnCss ${
                publishToSFActiveBtn ? "publishActiveBtn" : "publishDisableBtn"
              }`}
              variant="outlined"
            >
              {PUBLISH_TO_SF}
            </Button>
            {/* this button will be showed only when everything is marked OK from SF side. */}
            {/* <Button
              className={`smartScoreBtn btnCss smartScoreBtnOn100`}
              onClick={publishToSF}
              variant="outlined"
            >
              <AutoAwesomeIcon fontSize="small" /> &nbsp; Training Recommendations
            </Button> */}
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
              <span className="percentage">{totalWeight()}%</span>
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
        {/* {isPublishSuccessFul && <PublishSuccess />} */}
        {/* {isManagerFeedbackAvailable && <ManagerFeedback />} */}
        {/* <GoalsAccordion goals={goals} setGoals={setGoals} /> */}
        {goals.map((goalCategory: any) => {
          return (
            <GoalsAccordion
              goals={goalCategory.goals}
              category={goalCategory.category}
            />
          );
        })}
      </Box>
      {openEvaluateGoalDialog && (
        <EvaluateSmartScoreDialog
          openEvaluateGoalDialog={openEvaluateGoalDialog}
          setOpenEvaluateGoalDialog={setOpenEvaluateGoalDialog}
          isPublishAnywayBtnClicked={isPublishAnywayBtnClicked}
          setIsPublishAnywayBtnClicked={setIsPublishAnywayBtnClicked}
          publishToSFActiveBtn={publishToSFActiveBtn}
          setPublishToSFActiveBtn={setPublishToSFActiveBtn}
        />
      )}
      {openTrainingRecommendationDialog && (
        <RecommendTrainingsDialog
          openTrainingRecommendationDialog={openTrainingRecommendationDialog}
          setOpenTrainingRecommendationDialog={
            setOpenTrainingRecommendationDialog
          }
        />
      )}
    </>
  );
};

export default GoalDashboard;
