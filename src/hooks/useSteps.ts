import { useContext, useMemo } from 'react';
import { BaseContext } from '../context';

export const useSteps = () => {
  const { currentStep, setCurrentStep } = useContext(BaseContext);

  return useMemo(
    () => ({
      setCurrentStep,
      currentStep,
    }),
    [currentStep]
  );
};
