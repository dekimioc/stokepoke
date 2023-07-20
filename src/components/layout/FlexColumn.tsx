import React from 'react';
import styled from 'styled-components/native';
import { ViewStyle } from 'react-native';

export const FlexColumn: React.FC<ViewStyle & React.PropsWithChildren> = ({
  children,
  ...rest
}) => {
  return <Container {...rest}>{children}</Container>;
};

const Container = styled.View`
  display: flex;
  flex-direction: column;
`;
