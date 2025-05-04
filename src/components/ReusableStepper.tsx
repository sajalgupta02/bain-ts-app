import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import "./style.css";
import { useState } from "react";

const steps = [
  "Create Individual Goals with the help of AI",
  "When total weight adds upto 100%, evaluate overall SMART score",
  "Publish to Success Factors",
];

type ReusableConnectorProps = {
  activeStep: number;
};

const ReusableConnector = () => {
  return (
    <>
      <span style={{ fontSize: "24px", margin: "5px 24px" }}> &gt; </span>
    </>
  );
};

export default function ReusableStepper({
  activeStep,
}: ReusableConnectorProps) {
  return (
    <Box className="test">
      <span style={{ fontSize: "24px", maxWidth: "81px" }}>Overall Steps</span>
      <Stepper
        nonLinear
        activeStep={activeStep}
        connector={<ReusableConnector />}
      >
        {steps.map((label) => (
          <Step
            style={{ display: "flex", fontSize: "28px", gap: "5px" }}
            key={label}
          >
            <StepLabel />
            <h6>{label}</h6>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
