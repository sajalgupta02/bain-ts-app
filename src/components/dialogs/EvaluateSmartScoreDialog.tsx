import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import "./style.css";
import KRALoadingState from "../smartEvaluation/KRALoadingState";
import KRAApiRespTable from "../smartEvaluation/KRAApiRespTable";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  APPLY_AI_SUGGESTIONS,
  CANCEL,
  OK,
  OPEN_MY_ZONE,
  PUBLISH_ANYWAY,
  PUBLISH_GOALS_TO_SF,
  THANK_YOU_FOR_PUBLISHING,
} from "../../reusables/textData";

function EvaluateSmartScoreDialog({
  openEvaluateGoalDialog,
  setOpenEvaluateGoalDialog,
  isPublishAnywayBtnClicked,
  setIsPublishAnywayBtnClicked,
  publishToSFActiveBtn,
  setPublishToSFActiveBtn,
}: {
  openEvaluateGoalDialog: boolean;
  setOpenEvaluateGoalDialog: React.Dispatch<React.SetStateAction<boolean>>;
  isPublishAnywayBtnClicked: boolean;
  setIsPublishAnywayBtnClicked: (value: boolean) => void;
  publishToSFActiveBtn: boolean;
  setPublishToSFActiveBtn: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const navigate = useNavigate();
  const [isApiREsp, setIsApiResp] = React.useState(false);

  // React.useEffect(() => {
  //   setIsPublishBtnClicked(false);
  //   setTimeout(() => {
  //     setIsApiResp(true);
  //   }, 2000);
  // }, [setIsPublishBtnClicked]);

  React.useEffect(() => {
    // setIsPublishBtnClicked(false);
    setTimeout(() => {
      setIsApiResp(true);
    }, 2000);
  }, []);

  const handleClose = () => {
    setOpenEvaluateGoalDialog(false);
    navigate("/");
  };

  const handlePublishAnway = () => {
    setIsPublishAnywayBtnClicked(true);
  };

  const handleAISUggestions = () => {
    setOpenEvaluateGoalDialog(false);
    setPublishToSFActiveBtn(true);
    navigate("/");
  };

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
        {isPublishAnywayBtnClicked ? (
          <>{THANK_YOU_FOR_PUBLISHING}</>
        ) : isApiREsp ? (
          <KRAApiRespTable />
        ) : (
          <KRALoadingState />
        )}
      </DialogContent>
      {isApiREsp && (
        <DialogActions>
          {isPublishAnywayBtnClicked ? (
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
          ) : (
            <Box width={"100%"} display={"flex"} justifyContent="space-between">
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
                {CANCEL}
              </Button>
              <Box display={"flex"} gap={1}>
                <Button
                  sx={{
                    borderRadius: "20px",
                    background: "#003F72",
                    fontWeight: 700,
                  }}
                  variant="contained"
                  onClick={handleAISUggestions}
                >
                  {APPLY_AI_SUGGESTIONS}
                </Button>
                <Button
                  sx={{
                    borderRadius: "20px",
                    border: "1px solid #003F72",
                    color: "#003F72",
                    fontWeight: 700,
                  }}
                  variant="outlined"
                  onClick={handlePublishAnway}
                >
                  {PUBLISH_ANYWAY}
                </Button>
              </Box>
            </Box>
          )}
        </DialogActions>
      )}
    </Dialog>
  );
}

export default React.memo(EvaluateSmartScoreDialog);
