import type { ComponentType, Dispatch, SetStateAction } from 'react';

export interface StatesMachineConfig<StateType, StepNames extends string> {
  initialStep: StepNames;
  steps: {
    [key in StepNames]: {
      canAdvance: (state: StateType) => boolean;
    };
  };
  views: {
    [key in StepNames]: ComponentType<{
      state: StateType;
      setState: Dispatch<SetStateAction<StateType>>;
    }>;
  };
}
