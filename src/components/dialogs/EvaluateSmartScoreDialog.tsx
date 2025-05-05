import * as React from "react";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import "./style.css";
import KRALoadingState from "../smartEvaluation/KRALoadingState";
import KRAApiRespTable from "../smartEvaluation/KRAApiRespTable";

export default function EvaluateSmartScoreDialog({
  evaluateBtnClicked,
  setEvaluateBtnClicked,
}: {
  evaluateBtnClicked: boolean;
  setEvaluateBtnClicked: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleClose = () => {
    setEvaluateBtnClicked(false);
  };

  const isApiREsp = true;

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
      open={evaluateBtnClicked}
      // removing onClose prop to prevent closing on backdrop click
      // onClose={handleClose}
      scroll={"paper"}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle sx={{ fontWeight: 700 }} id="scroll-dialog-title">
        Publish Goals to Success Factors
      </DialogTitle>
      <DialogContent>
        {isApiREsp ? <KRAApiRespTable /> : <KRALoadingState />}
      </DialogContent>
      {isApiREsp && (
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Apply AI Suggestions</Button>
          <Button onClick={handleClose}>Publish Anyway</Button>
        </DialogActions>
      )}
    </Dialog>
  );
}
