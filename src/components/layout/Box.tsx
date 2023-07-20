import React from 'react';
import { ViewStyle } from 'react-native';
import styled from 'styled-components/native';

export const Box: React.FC<React.PropsWithChildren & ViewStyle> = ({ children, ...rest }) => {
  return <StyledBox {...rest}>{children}</StyledBox>;
};

const StyledBox = styled.View(
  ({ theme }) => `
    background: ${theme.colors.background};
    padding: ${theme.spacing.spacing15};
    borderRadius: ${theme.borderRadius.default};
    border: 1px solid ${theme.colors.thernary};
`
);
