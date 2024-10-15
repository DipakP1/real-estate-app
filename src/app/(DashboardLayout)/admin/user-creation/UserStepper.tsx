"use client";
import HorizontalLinearAlternativeLabelStepper from "@/components/Mui-Stepper";
import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import UserCreation from "./components/UserCreation";
import UserPermission from "./components/Permission";

const UserManagment = () => {
  const [step, setStep] = useState<any>(1);
  const [prev, setPrev] = useState<any>(false);
  const [formData, setFormData] = useState<any>();

  const handleSubmit = ()=> {    
  }////

  return (
    <div className="grid grid-cols-1 gap-9 ">
      <HorizontalLinearAlternativeLabelStepper step={step} />
      <div className="flex flex-col gap-9">
        <div className="rounded-[10px] border border-stroke bg-white  p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
          <div>
            {step === 0 && <UserCreation step={step} setStep={setStep} setPrev={setPrev}  />}
            {step === 1 && <UserPermission />}
          </div>

          {/* <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            {step > 0 ? (
              <Button
                name="prev"
                variant="contained"
                onClick={handleStep}
                sx={{ m: 2, backgroundColor: "#022213" }}
              >
                prev
              </Button>
            ) : (
              <Box></Box>
            )}

            {step !== 2 && (
              <Button
                name="next"
                variant="contained"
                onClick={handleSubmit}
                sx={{ m: 2, backgroundColor: "#022213" }}
              >
                {step === 1 ? "Submit" : "Next"}
              </Button>
            )}
          </Box> */}
        </div>
      </div>
    </div>
  );
};

export default UserManagment;
