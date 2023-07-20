import { FC } from 'react';
import styled from 'styled-components/native';

type HeaderProps = {
  text: string;
};

export const Header: FC<HeaderProps> = ({ text }) => {
  return <StyledHeader>{text}</StyledHeader>;
};

const StyledHeader = styled.Text(
  ({ theme }) => `
    color: ${theme.colors.primary};
    font-size: ${theme.fontSizes.big};
    font-weight: ${theme.fontWeights.bold};
    line-height: ${theme.lineHeights.default};
    letter-spacing: ${theme.letterSpacing.big};
    font-style: ${theme.fontStyles.default};
`
);
