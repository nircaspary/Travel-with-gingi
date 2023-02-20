import React, { ReactElement, useState } from 'react';

const titles = ['הגעה ועזיבה', 'תחומי עניין', 'העדפות אוכל', '?איפה אתם מתארחים', 'פרטים אישיים'];

const useMultistepForm = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };
  const back = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };
  const goTo = (index: number) => {
    setCurrentStepIndex(index);
  };
  return {
    currentStepTitle: titles[currentStepIndex],
    steps,
    currentStepIndex,
    step: steps[currentStepIndex],
    goTo,
    next,
    back,
    numberOfSteps: steps.length,
  };
};

export default useMultistepForm;
