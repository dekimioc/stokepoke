import React, { FC } from 'react';
import styled from 'styled-components/native';
import { ProgressBar } from '../progresBar';

type PageProps = {
  progressBar?: boolean;
} & React.PropsWithChildren;

export const Page: FC<PageProps> = ({ children, progressBar = false }) => {
  return (
    <StyledSafeAreaView>
      {progressBar && <ProgressBar />}
      <StyledScrollView>{children}</StyledScrollView>
    </StyledSafeAreaView>
  );
};

const StyledSafeAreaView = styled.SafeAreaView(
  ({ theme }) => `
    flex: 1;
    padding: ${theme.spacing.spacing15};
    background-color: ${theme.colors.backgroundPrimary};
`
);

const StyledScrollView = styled.ScrollView(
  ({ theme }) => `
    padding: ${theme.spacing.spacing30} ${theme.spacing.spacing15};
    background-color: ${theme.colors.backgroundPrimary};
`
);
