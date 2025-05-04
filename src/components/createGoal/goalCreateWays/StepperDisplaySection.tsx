import { Step, StepLabel, Stepper } from "@mui/material";

export default function StepperDisplaySection({
  activeStep,
  steps,
}: {
  activeStep: number;
  steps: string[];
}) {
  return (
    <Stepper nonLinear activeStep={activeStep} alternativeLabel>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel
            sx={{
              "& .MuiStepLabel-iconContainer": {
                backgroundColor: "#f0f0f0",
                borderRadius: "50%",
                "& .MuiSvgIcon-root": {
                  fontSize: "2rem",
                },
              },
              "& .MuiStepLabel-labelContainer": {
                "& .MuiStepLabel-label": {
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#003F72",
                  "&.Mui-completed": {
                    color: "#003F72",
                  },
                  "&.Mui-active": {
                    color: "#003F72",
                  },
                  "&.Mui-disabled": {
                    color: "#003F72",
                  },
                },
              },
            }}
          >
            {label}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
