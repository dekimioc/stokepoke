import { styled } from 'styled-components/native';

export const InformationalStar = () => {
  return <Star>*</Star>;
};

const Star = styled.Text(
  ({ theme }) => `
    color: ${theme.colors.secondary};
    font-size: ${theme.fontSizes.default};
    line-height: ${theme.lineHeights.default};
    font-weight: ${theme.fontWeights.default};
    letter-spacing: ${theme.letterSpacing.default};
  `
);
