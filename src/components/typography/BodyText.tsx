import { FC, useCallback } from 'react';
import styled from 'styled-components/native';
import { useTheme } from '../../hooks';

type BodyText = {
  text: string | string[];
  primary?: boolean;
};

export const BodyText: FC<BodyText> = ({ text, primary = true }) => {
  const { theme } = useTheme();

  const getTextStyle = useCallback(() => {
    return {
      style: {
        color: `${primary ? theme.colors.primary : theme.colors.secondary}`,
      },
    };
  }, [primary]);

  return <StyledBodyText {...getTextStyle()}>{text}</StyledBodyText>;
};

const StyledBodyText = styled.Text(
  ({ theme }) => `
    font-size: ${theme.fontSizes.body};
    line-height: ${theme.lineHeights.default};
    font-weight: ${theme.fontWeights.default};
    letter-spacing: ${theme.letterSpacing.default};
`
);
