import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import "./style.css";
import KRALoadingState from "../smartEvaluation/KRALoadingState";
import KRAApiRespTable from "../smartEvaluation/KRAApiRespTable";
import { Box, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  APPLY_AI_SUGGESTIONS,
  CANCEL,
  CLOSE,
  OK,
  OPEN_MY_ZONE,
  PUBLISH_ANYWAY,
  PUBLISH_GOALS_TO_SF,
  THANK_YOU_FOR_PUBLISHING,
} from "../../reusables/textData";
import { MainContext } from "../RootComp";

function EvaluateSmartScoreDialog({
  openEvaluateGoalDialog,
  setOpenEvaluateGoalDialog,
  // isPublishAnywayBtnClicked,
  // setIsPublishAnywayBtnClicked,
  publishToSFActiveBtn,
  setPublishToSFActiveBtn,
}: {
  openEvaluateGoalDialog: boolean;
  setOpenEvaluateGoalDialog: React.Dispatch<React.SetStateAction<boolean>>;
  // isPublishAnywayBtnClicked: boolean;
  // setIsPublishAnywayBtnClicked: (value: boolean) => void;
  publishToSFActiveBtn: boolean;
  setPublishToSFActiveBtn: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const navigate = useNavigate();
  const [isApiREsp, setIsApiResp] = React.useState(false);
  const [btnMessage, setBtnMessage] = React.useState("Add Recommended Goals");
  const [newGoalsCount, setNewGoalsCount] = React.useState(0);

  const [evaluateBtnMessage, setEvaluateBtnMessage] = React.useState(
    "Re-Evaluate SMART Score"
  );
  const {
    goals,
    setGoals,
    overallSmartScore,
    setOverallSmartScore,
    threshold,
    rows,
    setRows,
    tableData,
  } = React.useContext(MainContext);

  // React.useEffect(() => {
  //   setIsPublishBtnClicked(false);
  //   setTimeout(() => {
  //     setIsApiResp(true);
  //   }, 2000);
  // }, [setIsPublishBtnClicked]);

  React.useEffect(() => {
    // setIsPublishBtnClicked(false);
    setTimeout(() => {
      const numberOfNewGoals = tableData.filter(
        (goal: any) => goal.isNew
      ).length;
      setNewGoalsCount(numberOfNewGoals);
      setIsApiResp(true);
      setRows(tableData);
      setOverallSmartScore(5); // Example score, replace with actual score from API response
    }, 2000);
  }, []);

  const handleClose = () => {
    setOpenEvaluateGoalDialog(false);
    setPublishToSFActiveBtn(false);
    navigate("/");
  };

  const addRecommendedGoals = () => {
    // setIsPublishAnywayBtnClicked(true);
    const result = goals.map((cat: any) => ({
      category: cat.category,
      goals: cat.goals.map((goal: any) => ({ ...goal })),
    }));
    const newGoals = rows.filter((goal: any) => goal.isNew);

    newGoals.forEach((goal: any) => {
      const { category, smartScore, weight: weightValue } = goal;
      const score = parseInt(smartScore.split("/")[0]); // Convert "8/10" to 8
      const weight =
        weightValue === "-" || weightValue === "" ? 0 : parseInt(weightValue); // Convert "8/10" to 8

      // Find existing category
      const existingCategory = result.find(
        (cat: any) => cat.category === category
      );

      if (existingCategory) {
        // Add new goal
        existingCategory.goals.push({ score, weight });
      } else {
        // Create new category
        result.push({
          category,
          goals: [{ score, weight }],
        });
      }
    });
    setGoals(result);
    // recalulate the smart score again based on the new goals selected
    setOpenEvaluateGoalDialog(false);
    setPublishToSFActiveBtn(false);
    navigate("/");
  };

  // const handleAISUggestions = () => {
  //   // console.log(rows);
  //   const updatedRows = rows.filter((row: any) => row.isSelected);
  //   console.log(updatedRows);
  //   if (evaluateBtnMessage === "Apply AI Suggestions") {
  //     setPublishToSFActiveBtn(true);
  //     setOpenEvaluateGoalDialog(false);
  //     navigate("/");
  //     return;
  //   }
  //   let tempScore = 7; // Example score, replace with actual score from API response
  //   if (tempScore >= threshold) {
  //     setOverallSmartScore(7);
  //     setEvaluateBtnMessage(APPLY_AI_SUGGESTIONS);
  //     // setBtnMessage('Publish ')
  //   }
  // };

  // const handleAISUggestions = () => {
  //   // console.log(rows);
  //   const updatedRows = rows.filter((row: any) => row.isSelected);
  //   // console.log(updatedRows);
  //   let tempScore = 7; // Example score, replace with actual score from API response
  //   setOverallSmartScore(tempScore);
  //   if (tempScore >= threshold) {
  //     setEvaluateBtnMessage(APPLY_AI_SUGGESTIONS);
  //     // return;
  //   }
  //   if (evaluateBtnMessage === APPLY_AI_SUGGESTIONS && tempScore >= threshold) {
  //     setPublishToSFActiveBtn(true);
  //     setOpenEvaluateGoalDialog(false);
  //     navigate("/");
  //     return;
  //   }
  // };

  // const disablePublishAnyway = () => {
  //   if (smartScore >= threshold) {
  //     return false;
  //   }
  //   return true;
  // };

  return (
    <Dialog
      sx={{
        "& .css-10d30g3-MuiPaper-root-MuiDialog-paper": {
          minWidth: "800px !important",
          maxWidth: "1000px !important",
          borderRadius: "10px",
          padding: "10px",
        },
      }}
      open={openEvaluateGoalDialog}
      // removing onClose prop to prevent closing on backdrop click
      // onClose={handleClose}
      scroll={"paper"}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle sx={{ fontWeight: 700 }} id="scroll-dialog-title">
        {PUBLISH_GOALS_TO_SF}
      </DialogTitle>
      <DialogContent>
        {/* {isPublishAnywayBtnClicked ? (
          <>{THANK_YOU_FOR_PUBLISHING}</>
        ) : isApiREsp ? (
          <KRAApiRespTable />
        ) : (
          <KRALoadingState />
        )} */}

        {isApiREsp ? <KRAApiRespTable /> : <KRALoadingState />}
      </DialogContent>
      {isApiREsp && (
        <DialogActions>
          {/* {isPublishAnywayBtnClicked ? (
            <Box
              display={"flex"}
              gap={2}
              justifyContent={"flex-end"}
              width={"100%"}
            >
              <Button
                sx={{
                  borderRadius: "20px",
                  background: "#003F72",
                  fontWeight: 700,
                }}
                variant="contained"
              >
                {OPEN_MY_ZONE}
              </Button>
              <Button
                sx={{
                  borderRadius: "20px",
                  border: "1px solid #003F72",
                  color: "#003F72",
                  fontWeight: 700,
                }}
                variant="outlined"
                onClick={handleClose}
              >
                {OK}
              </Button>
            </Box>
          ) : ( */}
          {/* <Box width={"100%"} display={"flex"} justifyContent="space-between"> */}
          <Box
            width={"100%"}
            display={"flex"}
            gap={1}
            justifyContent={"flex-end"}
          >
            <Button
              sx={{
                borderRadius: "20px",
                border: "1px solid #003F72",
                color: "#003F72",
                fontWeight: 700,
              }}
              variant="outlined"
              onClick={handleClose}
            >
              {CLOSE}
            </Button>
            {/* <Box display={"flex"} gap={1}> */}
            {/* <CircularProgress color="secondary" /> */}
            {/* <Button
                sx={{
                  borderRadius: "20px",
                  background: "#003F72",
                  fontWeight: 700,
                }}
                variant="contained"
                onClick={handleAISUggestions}
              >
                {evaluateBtnMessage}
              </Button> */}
            {newGoalsCount > 0 && (
              <Button
                sx={{
                  borderRadius: "20px",
                  background: "#003F72",
                  fontWeight: 700,
                }}
                variant="contained"
                onClick={addRecommendedGoals}
                // disabled={disablePublishAnyway()}
              >
                {btnMessage}
              </Button>
            )}
            {/* </Box> */}
          </Box>
          {/* )} */}
        </DialogActions>
      )}
    </Dialog>
  );
}

export default React.memo(EvaluateSmartScoreDialog);
