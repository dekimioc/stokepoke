import React from 'react';
import styled from 'styled-components/native';

export const Box: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <StyledBox>{children}</StyledBox>;
};

const StyledBox = styled.View(
  ({ theme }) => `
    background: ${theme.colors.background};
    padding: ${theme.spacing.spacing15};
    borderRadius: ${theme.borderRadius.default};
    border: 1px solid ${theme.colors.thernary};
`
);
