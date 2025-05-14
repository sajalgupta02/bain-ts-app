import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import "./style.css";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TrainingRecommendationTable from "../smartEvaluation/TrainingRecommendationTable";
import KRALoadingState from "../smartEvaluation/KRALoadingState";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import LaunchIcon from "@mui/icons-material/Launch";
import * as XLSX from "xlsx";

type trainingRecommendProps = {
  openTrainingRecommendationDialog: boolean;
  setOpenTrainingRecommendationDialog: React.Dispatch<
    React.SetStateAction<boolean>
  >;
};

function RecommendTrainingsDialog({
  openTrainingRecommendationDialog,
  setOpenTrainingRecommendationDialog,
}: trainingRecommendProps) {
  const navigate = useNavigate();
  const [isApiREsp, setIsApiResp] = React.useState(true);

  const handleClose = () => {
    setOpenTrainingRecommendationDialog(false);
    navigate("/");
  };

  // const data = [
  //   { Name: "Alice", Age: 25, Country: "India" },
  //   { Name: "Bob", Age: 30, Country: "USA" },
  // ];

  // const downloadData = (data: any, filename = "data.xlsx") => {
  //   // Convert JSON to worksheet
  //   const worksheet = XLSX.utils.json_to_sheet(data);

  //   // Create a new workbook and append the worksheet
  //   const workbook = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

  //   // Trigger download
  //   XLSX.writeFile(workbook, filename);
  // };

  return (
    <Dialog
      sx={{
        "& .css-10d30g3-MuiPaper-root-MuiDialog-paper": {
          minWidth: "1200px !important",
          maxWidth: "1500px !important",
          borderRadius: "10px",
          padding: "10px",
        },
      }}
      open={openTrainingRecommendationDialog}
      // removing onClose prop to prevent closing on backdrop click
      // onClose={handleClose}
      scroll={"paper"}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle sx={{ fontWeight: 700 }} id="scroll-dialog-title">
        Recommended Trainings
      </DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
          <Button
            variant="outlined"
            // onClick={() => downloadData(data, "users.xlsx")}
          >
            <FileDownloadIcon fontSize="small" /> &nbsp; Download
          </Button>
          <Button variant="outlined">
            <LaunchIcon fontSize="small" /> &nbsp; View Full Training List
          </Button>
        </Box>
        {isApiREsp ? <TrainingRecommendationTable /> : <KRALoadingState />}
      </DialogContent>

      <DialogActions>
        {isApiREsp && (
          <Box width={"100%"} display={"flex"} justifyContent="flex-end">
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
              Close
            </Button>
          </Box>
        )}
      </DialogActions>
    </Dialog>
  );
}

export default RecommendTrainingsDialog;
