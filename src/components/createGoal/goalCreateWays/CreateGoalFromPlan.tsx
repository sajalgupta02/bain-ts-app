import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, TextField } from "@mui/material";
import GoalsDisplaySection from "./GoalsDisplaySection";
import StepperDisplaySection from "./StepperDisplaySection";
import { AutoAwesome as AutoAwesomeIcon } from "@mui/icons-material";
import GoalCreateOrEditForm from "../GoalCreateOrEditForm";
import { useNavigate } from "react-router-dom";
import {
  getIndianFinancialYearDates,
  validateFormData,
} from "../../../reusables/utils";

export default function CreateGoalFromPlan() {
  let navigate = useNavigate();
  const steps = ["Choose Goal", "Modify", "Evaluate & Save"];
  const { startDate, endDate } = getIndianFinancialYearDates();

  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = React.useState({
    category: "Functional and Financial",
    goalName: "",
    measureOfSuccess: "",
    weight: 5,
    startDate: startDate,
    endDate: endDate,
    target: "",
  });

  const [milestones, setMilestones] = React.useState<
    Array<{
      id: string;
      milestone: string;
      plannedDate: string;
      achievementDate: string;
    }>
  >([]);

  const [evaluateBtnClicked, setEvaluateBtnClicked] = React.useState(false);

  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const categories = [
    "Functional and Financial",
    "Learning and Growth",
    "Operational Excellence",
  ];

  const evaluateWithAIBtn = () => {
    setEvaluateBtnClicked(true);
    setActiveStep(2);
  };

  const navigateHome = () => {
    navigate("/");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateFormData(formData);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    console.log("Form submitted:", { ...formData, milestones });
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f4f6f9",
        pb: 4,
        minHeight: "100%",
      }}
    >
      <Box className="goalCreationTitle">
        Create Performance Goal from Goal Plan
      </Box>
      <Box sx={{ maxWidth: 1000, margin: "20px auto", p: 3 }}>
        <StepperDisplaySection steps={steps} activeStep={activeStep} />
        {activeStep === 0 && (
          <Box className="stepperSection">
            <Box
              sx={{
                padding: "20px",
                backgroundColor: "white",
                borderRadius: "20px",
                marginTop: "30px",
              }}
            >
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{ mb: 1, fontWeight: "bold" }}
                >
                  Goal Plan
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  sx={{ mb: 3, pointerEvents: "none" }}
                  value={"Individual Goals 2023-24"}
                ></TextField>
              </Box>
            </Box>
            <Box sx={{ mt: 3 }}>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
                Individual Goals 2023-24
              </Typography>
              <GoalsDisplaySection
                setActiveStep={setActiveStep}
                setFormData={setFormData}
                setMilestones={setMilestones}
              />
            </Box>
          </Box>
        )}
        {activeStep !== 0 && (
          <GoalCreateOrEditForm
            formData={formData}
            setFormData={setFormData}
            milestones={milestones}
            setMilestones={setMilestones}
            errors={errors}
            setErrors={setErrors}
            categories={categories}
            evaluateBtnClicked={evaluateBtnClicked}
            setEvaluateBtnClicked={setEvaluateBtnClicked}
          />
        )}
      </Box>
      <Box
        className="fixedPanel"
        sx={
          activeStep !== 0
            ? {}
            : { display: "flex", justifyContent: "flex-end" }
        }
      >
        {activeStep !== 0 && (
          <Button
            onClick={evaluateWithAIBtn}
            style={{
              borderRadius: "20px",
              color: "white",
              padding: "10px 30px",
              background:
                "linear-gradient(121deg, #00009D 4.2%, #390D8F 31.49%, #922569 62.22%)",
            }}
          >
            <AutoAwesomeIcon fontSize="small" /> &nbsp;
            <strong>Evaluate with AI</strong>
          </Button>
        )}
        <Box sx={{ display: "flex", gap: "15px" }}>
          {activeStep >= 1 && (
            <Button
              onClick={handleSubmit}
              style={{
                borderRadius: "20px",
                padding: "10px 30px",
                background: "#003F72",
              }}
              variant="contained"
              disabled={!evaluateBtnClicked}
            >
              <strong>Save</strong>
            </Button>
          )}
          <Button
            onClick={navigateHome}
            style={{
              border: "1px solid #003F72",
              borderRadius: "20px",
              background: "white",
              color: "#003F72",
              padding: "10px 30px",
            }}
          >
            <strong>Cancel</strong>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
