import { styled } from 'styled-components/native';
import { WithChildren } from '../../types';
import { FC } from 'react';
import { InformationalStar } from '../InformationalStar';

type BaseLabelProps = {
  isRequired: boolean;
} & WithChildren;

export const BaseLabel: FC<BaseLabelProps> = ({ isRequired, children }) => {
  return (
    <StyledLabel>
      {children}
      {isRequired && <InformationalStar />}
    </StyledLabel>
  );
};

const StyledLabel = styled.Text(
  ({ theme }) => `
      color: ${theme.colors.primary};
      font-size: ${theme.fontSizes.default};
      line-height: ${theme.lineHeights.medium};
      font-weight: ${theme.fontWeights.default};
      letter-spacing: ${theme.letterSpacing.default};
  `
);
