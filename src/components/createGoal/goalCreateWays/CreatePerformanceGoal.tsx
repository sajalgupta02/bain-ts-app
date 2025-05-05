import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import "../style.css";
import GoalCreateOrEditForm from "../GoalCreateOrEditForm";
import { AutoAwesome as AutoAwesomeIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const CreatePerformanceGoal = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    category: "Functional and Financial",
    goalName: "",
    measureOfSuccess: "",
    weight: 0,
    startDate: "1 Apr 2024",
    endDate: "31 Mar 2025",
    target: "",
  });

  const [milestones, setMilestones] = useState<
    Array<{
      id: string;
      milestone: string;
      plannedDate: string;
      achievementDate: string;
    }>
  >([]);

  const [evaluateBtnClicked, setEvaluateBtnClicked] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const categories = [
    "Functional and Financial",
    "Learning and Growth",
    "Operational Excellence",
  ];

  // Validation
  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.goalName) newErrors.goalName = "Goal name is required";
    if (formData.weight <= 0)
      newErrors.weight = "Weight must be greater than 0";
    if (!formData.startDate) newErrors.startDate = "Start date is required";
    if (!formData.endDate) newErrors.endDate = "End date is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", { ...formData, milestones });
      // Submit logic here
    }
  };

  const navigateHome = () => {
    navigate("/");
  };

  const evaluateWithAIBtn = () => {
    setEvaluateBtnClicked(true);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f4f6f9",
        pb: 3,
      }}
    >
      <Box className="goalCreationTitle"> Create Performance Goal</Box>
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
      <Box
        className="cancelBtnCreateGoal1"
        sx={
          !evaluateBtnClicked
            ? {}
            : { display: "flex", justifyContent: "flex-end" }
        }
      >
        {!evaluateBtnClicked && (
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
          <Button
            onClick={handleSubmit}
            style={{
              border: "1px solid #003F72",
              borderRadius: "20px",
              padding: "10px 30px",
            }}
            variant="contained"
          >
            <strong>Save</strong>
          </Button>
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
};

export default CreatePerformanceGoal;
