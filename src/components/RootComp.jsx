import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { getIndianFinancialYearDates } from "../reusables/utils";
// import { Provider } from 'react-redux'
// import store from '../store/store'
// import ReusableStepper from "./ReusableStepper";

export const MainContext = createContext();

function createData(
  id,
  goalName,
  measureOfSuccess,
  smartScore,
  weight,
  isNew,
  isSelected,
  category
) {
  return {
    id,
    goalName,
    measureOfSuccess,
    smartScore,
    weight,
    isNew,
    isSelected,
    category,
  };
}

const tableData = [
  createData(
    1,
    "Goal Name Example",
    "Example measure of success",
    "8/10",
    "5",
    false,
    true,
    "Functional and Financial"
  ),
  createData(
    2,
    "Goal Name Example",
    "Example measure of success",
    "8/10",
    "5",
    false,
    true,
    "Learning and Growth"
  ),
  createData(
    3,
    "Goal Name Example",
    "Example measure of success",
    "8/10",
    "5",
    false,
    true,
    "Learning and Growth"
  ),
  createData(
    4,
    "Goal Name Example",
    "Example measure of success",
    "8/10",
    "5",
    false,
    true,
    "Learning and Growth"
  ),
  createData(
    5,
    "Goal Name Example",
    "Example measure of success",
    "8/10",
    "5",
    false,
    true,
    "Functional and Financial"
  ),
  createData(
    6,
    "Goal Name Example",
    "Example measure of success",
    "8/10",
    "-",
    false,
    true,
    "Functional and Financial"
  ),
  createData(
    7,
    "Goal Name Example",
    "Example measure of success",
    "8/10",
    "-",
    true,
    true,
    "Learning and Growth"
  ),
];

function RootComp() {
  const { startDate, endDate } = getIndianFinancialYearDates();
  const [goals, setGoals] = useState([
    {
      category: "Functional and Financial",
      goals: [
        { score: 7, weight: 20 },
        { score: 8, weight: 20 },
        { score: 9, weight: 30 },
      ],
    },
    {
      category: "Learning and Growth",
      goals: [
        { score: 7, weight: 20 },
        { score: 8, weight: 10 },
      ],
    },
  ]);

  const [goalsForLibraryAndPlan, setGoalsForLibraryAndPlan] = useState([
    { score: 7, weight: 20 },
    { score: 8, weight: 20 },
    { score: 9, weight: 30 },
    { score: 8, weight: 30 },
  ]);

  const [formData, setFormData] = useState({
    category: "Functional and Financial",
    goalName: "",
    measureOfSuccess: "",
    weight: 5,
    startDate: startDate,
    endDate: endDate,
    target: "",
  });

  const [acceptSugg, setAcceptSugg] = useState({
    goalNameSugg: "",
    measureOfSuccessSugg: "",
  });

  const [showSuggBox, setShowSuggBox] = useState({
    goalNameBox: true,
    measureOfSuccessBox: true,
  });

  const [milestones, setMilestones] = useState([]);

  const [evaluateBtnClicked, setEvaluateBtnClicked] = useState(false);

  const [errors, setErrors] = useState({});
  const [overallSmartScore, setOverallSmartScore] = useState(0);
  const [rows, setRows] = React.useState(tableData);
  const threshold = 7;

  const value = {
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
    goalsForLibraryAndPlan,
    setGoalsForLibraryAndPlan,
    overallSmartScore,
    setOverallSmartScore,
    threshold,
    rows,
    setRows,
    tableData, // for testing purpose
  };

  return (
    // <Provider store={store}>
    <>
      {/* <ReusableStepper /> */}

      <MainContext.Provider value={value}>
        <Outlet />
      </MainContext.Provider>
    </>
    // </Provider>
  );
}

export default RootComp;
