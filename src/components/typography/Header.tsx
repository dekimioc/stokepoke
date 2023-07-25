import { FC, useCallback } from 'react';
import styled from 'styled-components/native';
import { useTheme } from '../../hooks';
import { ViewStyle } from 'react-native';

type HeaderProps = {
  text: string;
  primary?: boolean;
};

export const Header: FC<HeaderProps & ViewStyle> = ({ text, primary = true, ...rest }) => {
  const { theme } = useTheme();
  const getStyle = useCallback(() => {
    return {
      style: {
        color: `${primary ? theme.colors.primary : theme.colors.secondary}`,
      },
    };
  }, [primary]);
  return (
    <StyledHeader {...getStyle()} {...rest}>
      {text}
    </StyledHeader>
  );
};

const StyledHeader = styled.Text(
  ({ theme }) => `
    font-size: ${theme.fontSizes.big};
    font-weight: ${theme.fontWeights.bold};
    line-height: ${theme.lineHeights.default};
    letter-spacing: ${theme.letterSpacing.big};
    font-style: ${theme.fontStyles.default};
`
);
