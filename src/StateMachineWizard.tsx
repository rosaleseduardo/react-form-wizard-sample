import { useMachineWizard } from './hooks';

const StateMachineWizard = () => {
  const {
    StepComponent,
    wizardState,
    setWizardState,
    currentStep,
    handleNext,
  } = useMachineWizard();

  return (
    <section>
      <h1>State Machine Wizard</h1>
      <StepComponent state={wizardState} setState={setWizardState} />
      {currentStep !== 'confirmation' && (
        <button onClick={handleNext}>Next</button>
      )}
    </section>
  );
};

export default StateMachineWizard;
