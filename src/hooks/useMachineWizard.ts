import { useState } from 'react';
import type { ComponentType, Dispatch, SetStateAction } from 'react';

import { stateMachineConfig } from '../configs';
import type {
  StatesMachineConfig,
  StepNames,
  WizardState,
} from '../interfaces';

const useMachineWizard = () => {
  const [wizardState, setWizardState] = useState<WizardState>({
    name: '',
    age: 0,
  });
  const [currentStep, setCurrentStep] = useState<StepNames>(
    stateMachineConfig.initialStep,
  );

  const getStepView = <T, V extends string>(
    config: StatesMachineConfig<T, V>,
    stepName: V,
  ): ComponentType<{ state: T; setState: Dispatch<SetStateAction<T>> }> =>
    config.views[stepName];

  const handleNext = () => {
    const canAdvance =
      stateMachineConfig.steps[currentStep].canAdvance(wizardState);

    if (canAdvance) {
      if (currentStep === 'step1') setCurrentStep('step2');
      else if (currentStep === 'step2') setCurrentStep('confirmation');
    } else {
      alert("You can't move forward yet.");
    }
  };

  const StepComponent = getStepView(stateMachineConfig, currentStep);

  return {
    StepComponent,
    wizardState,
    setWizardState,
    currentStep,
    setCurrentStep,
    handleNext,
  };
};

export default useMachineWizard;
