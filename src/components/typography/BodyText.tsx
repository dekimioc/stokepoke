import { FC } from 'react';
import styled from 'styled-components/native';

type BodyText = {
  text: string | string[];
};

export const BodyText: FC<BodyText> = ({ text }) => {
  return <StyledBodyText>{text}</StyledBodyText>;
};

const StyledBodyText = styled.Text(
  ({ theme }) => `
    color: ${theme.colors.primary};
    font-size: ${theme.fontSizes.body};
    line-height: ${theme.lineHeights.default};
    font-weight: ${theme.fontWeights.default};
    letter-spacing: ${theme.letterSpacing.default};
`
);
