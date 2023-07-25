import { FC } from 'react';
import { styled } from 'styled-components/native';

type CheckoutFormErrorMessageProps = {
  message: string;
};

export const CheckoutFormErrorMessage: FC<CheckoutFormErrorMessageProps> = ({ message }) => {
  return <StyledError>{`*${message}`}</StyledError>;
};

const StyledError = styled.Text(
  ({ theme }) => `
    color: ${theme.colors.secondary};
    font-size: ${theme.fontSizes.medium};
    line-height: ${theme.lineHeights.body};
    font-weight: ${theme.fontWeights.default};
    letter-spacing: ${theme.letterSpacing.default};
  `
);
