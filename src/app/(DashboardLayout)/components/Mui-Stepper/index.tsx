"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { StepConnector, stepConnectorClasses, Typography } from "@mui/material";
import styled from "styled-components";
import DoneIcon from "@mui/icons-material/Done";
import BadgeIcon from "@mui/icons-material/Badge";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import SecurityIcon from "@mui/icons-material/Security";
import { StepIconProps } from "@mui/material/StepIcon";

const steps = [
  "Create User",
  "Permissions",
];

// const ColorlibStepIcon = (props: StepIconProps) => {
//     const { active, completed, className, icon } = props;
//     const icons: { [index: string]: React.ReactElement } = {
//       1: <BadgeIcon  />,
//       2: <SupervisedUserCircleIcon />,
//       3: <ContactMailIcon />,
//     };

//     return (
//       <div
//         className={className}
//         style={{
//           color: active || completed ? '#37a329' : '#ccc',
//         }}
//       >
//         {icons[String(icon)]}
//       </div>
//     );
//   };

const ColorlibStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  zIndex: 1,
  color: "#022213",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "grey",
  ...(ownerState.active && {
    backgroundColor: "#acdd33",
  }),
  ...(ownerState.completed && {
    backgroundColor: "#37a329",
  }),
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className, icon } = props;
  const icons: { [index: string]: React.ReactElement } = {
    1: completed ? <DoneIcon /> : <BadgeIcon />,
    2: completed ? <DoneIcon /> : <SecurityIcon />,
    // 3: completed ? <DoneIcon /> : <SupervisedUserCircleIcon />,
    // 4: completed ? <DoneIcon /> : <ContactMailIcon />,
    // 5: <SecurityIcon />,
    // 6: <SecurityIcon />,
    // 7: <SecurityIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className + " iconsbox"}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
    marginLeft: "5%",
    marginRight: "5%",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#37a329",
      position: "relative",
      "&::after": {
        position: "absolute",
        content: '""',
        right: "-2px",
        top: "-8px",
        width: "0",
        height: "0",
        borderTop: "10px solid transparent",
        borderLeft: "10px solid #37a329",
        borderBottom: "10px solid transparent",
      },
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#37a329",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: "#2947A3",
    borderRadius: 1,
  },
}));

export default function HorizontalLinearAlternativeLabelStepper({ step }: any) {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper
        activeStep={step}
        alternativeLabel
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>
              <Typography className="font-medium text-dark dark:text-white">
                {label}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
