import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import { FlexRow } from '../layout';
import { BodyText } from '../typography';
import { useTheme } from '../../hooks';

type LabelProps = {
  checked: boolean;
  extraText?: string;
  disabled?: boolean;
} & React.PropsWithChildren;

export const Label: React.FC<LabelProps> = ({ checked, extraText, disabled = false, children }) => {
  const { theme } = useTheme();

  const getStyle = useCallback(() => {
    return {
      style: {
        color: checked
          ? theme.colors.secondary
          : disabled
          ? theme.colors.gray
          : theme.colors.primary,
      },
    };
  }, [checked, disabled]);

  return (
    <FlexRow gap={3}>
      <StyledText {...getStyle()}>{children}</StyledText>
      {extraText && <BodyText text={extraText} />}
    </FlexRow>
  );
};

const StyledText = styled.Text(
  ({ theme }) => `
    font-size: ${theme.fontSizes.body};
    font-style: ${theme.fontStyles.default};
    font-weight: ${theme.fontWeights.bold};
    line-height: ${theme.lineHeights.default}
`
);
