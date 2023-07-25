import { useCallback } from 'react';
import { styled } from 'styled-components/native';
import { useSteps } from '../../hooks';
import { MAX_STEPS } from '../../constants';

export const ProgressBar = () => {
  const { currentStep } = useSteps();

  const getProgressBarWidth = useCallback(() => {
    const percentComplete = (currentStep / MAX_STEPS) * 100;
    return {
      style: {
        width: `${percentComplete}%`,
      },
    };
  }, [currentStep]);

  return (
    <Container>
      <StepsWrapper>
        <CurrentText>{`Step ${currentStep}`}</CurrentText>
        <AllSteps>of {MAX_STEPS}</AllSteps>
      </StepsWrapper>
      <InnerContainer>
        <FillProgressBar {...getProgressBarWidth()} />
      </InnerContainer>
    </Container>
  );
};

const Container = styled.View(
  ({ theme }) => `
  padding: ${theme.spacing.spacing30} ${theme.spacing.spacing15};
`
);

const InnerContainer = styled.View(
  ({ theme }) => `
  flex-direction: row;
  height: 1px;
  background-color: ${theme.colors.semiTransparent};
`
);

const FillProgressBar = styled.View(
  ({ theme }) => `
  height: 2px;
  top: -1px;
  background-color: ${theme.colors.secondary};
  transition-property: width;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
`
);
const StepsWrapper = styled.View(
  ({ theme }) => `
  display: flex;
  flex-direction: row;
  gap: ${theme.spacing.spacing5};
  margin-bottom: ${theme.spacing.spacing8}
`
);

const CurrentText = styled.Text(
  ({ theme }) => `
    font-size: ${theme.fontSizes.body};
    line-height: ${theme.lineHeights.default};
    font-weight: ${theme.fontWeights.bold};
    letter-spacing: ${theme.letterSpacing.default};
`
);

const AllSteps = styled(CurrentText)(
  ({ theme }) => `
    color: ${theme.colors.grayLight};
    font-weight: ${theme.fontWeights.default};
`
);
