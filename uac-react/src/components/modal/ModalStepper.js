import { useState } from 'react';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = ['Step 1', 'Step 2', 'Step 3'];

export default function ModalStepper(props) {
  return (
    <>
      <div className="w-full">
        <Stepper activeStep={props.activeStep} alternativeLabel>
          {steps.map(label => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </div>
    </>
  );
}
