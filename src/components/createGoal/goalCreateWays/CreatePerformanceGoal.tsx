import React, { useContext, useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import "../style.css";
import GoalCreateOrEditForm from "../GoalCreateOrEditForm";
import { AutoAwesome as AutoAwesomeIcon } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getIndianFinancialYearDates,
  validateFormData,
} from "../../../reusables/utils";
import { MainContext } from "../../RootComp";

const CreatePerformanceGoal = () => {
  let navigate = useNavigate();
  // const { state } = useLocation();
  // const { goalsData } = state;
  const { startDate, endDate } = getIndianFinancialYearDates();
  const {
    goals,
    setGoals,
    formData,
    setFormData,
    acceptSugg,
    setAcceptSugg,
    showSuggBox,
    setShowSuggBox,
    milestones,
    setMilestones,
    evaluateBtnClicked,
    setEvaluateBtnClicked,
    errors,
    setErrors,
  } = useContext(MainContext);

  useEffect(() => {
    setFormData({
      category: "Functional and Financial",
      goalName: "",
      measureOfSuccess: "",
      weight: 5,
      startDate: startDate,
      endDate: endDate,
      target: "",
    });
    setAcceptSugg({ goalNameSugg: "", measureOfSuccessSugg: "" });
    setShowSuggBox({ goalNameBox: true, measureOfSuccessBox: true });
    setMilestones([]);
    setEvaluateBtnClicked(false);
    setErrors({});
  }, []);

  const categories = [
    "Functional and Financial",
    "Learning and Growth",
    "Operational Excellence",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateFormData(formData);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    // this portion needs to be replaced with actual api data
    // const temp = [...goals, { score: 15, weight: 45 }];
    // setGoals(temp);

    const result = [];
    for (let data of goals) {
      if (data.category !== formData.category) {
        result.push(data);
      } else {
        const updated = [...data.goals, { score: 15, weight: 45 }];
        const payload = {
          category: formData.category,
          goals: updated,
        };
        result.push(payload);
      }
    }
    setGoals(result);
    navigateHome();
  };

  const navigateHome = () => {
    navigate("/");
  };

  const evaluateWithAIBtn = () => {
    setEvaluateBtnClicked(true);
    // const errors = validateFormData(formData);
    // if (Object.keys(errors).length > 0) {
    //   setErrors(errors);
    //   return;
    // }
    setAcceptSugg({
      goalNameSugg: "test goal",
      measureOfSuccessSugg: "test measure success",
    });
    setShowSuggBox({
      goalNameBox: true,
      measureOfSuccessBox: true,
    });
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f4f6f9",
        pb: 3,
      }}
    >
      <Box className="goalCreationTitle"> Create Performance Goal</Box>
      {/* <GoalCreateOrEditForm
        formData={formData}
        setFormData={setFormData}
        milestones={milestones}
        setMilestones={setMilestones}
        errors={errors}
        setErrors={setErrors}
        categories={categories}
        evaluateBtnClicked={evaluateBtnClicked}
        setEvaluateBtnClicked={setEvaluateBtnClicked}
        acceptSugg={acceptSugg}
        showSuggBox={showSuggBox}
        setShowSuggBox={setShowSuggBox}
      /> */}
      <GoalCreateOrEditForm categories={categories} />
      <Box className="fixedPanel">
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
        <Box sx={{ display: "flex", gap: "15px" }}>
          <Button
            disabled={!evaluateBtnClicked}
            onClick={handleSubmit}
            className={`saveBtn ${evaluateBtnClicked && "saveBtnBg"}`}
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

// client side validations for evaluate with ai button
// goal plan also should have dropdown
