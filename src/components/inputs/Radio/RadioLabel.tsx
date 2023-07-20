import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import { useTheme } from '../../../hooks';

type RadioLabelProps = {
  checked: boolean;
} & React.PropsWithChildren;

export const RadioLabel: React.FC<RadioLabelProps> = ({ checked, children }) => {
  const { theme } = useTheme();
  const getStyle = useCallback(() => {
    return {
      style: {
        color: checked ? theme.colors.secondary : theme.colors.primary,
      },
    };
  }, [checked]);
  return <Container {...getStyle()}>{children}</Container>;
};

const Container = styled.Text(
  ({ theme }) => `
    font-size: ${theme.fontSizes.body};
    font-style: ${theme.fontStyles.default};
    font-weight: ${theme.fontWeights.bold};
    line-height: ${theme.lineHeights.default};
`
);
