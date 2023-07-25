import styled from 'styled-components/native';
import { ButtonProps } from '../../types';
import { useCallback } from 'react';
import { useTheme } from '../../hooks';
import { ArrowRight } from '../../../assets/svg/ArrowRight';

type PrimaryButtonProps = {
  colored?: boolean;
  fontWeight?: boolean;
};

export const PrimaryButton: React.FC<ButtonProps & PrimaryButtonProps> = ({
  text,
  withIcon,
  colored = false,
  fontWeight = false,
  ...rest
}) => {
  const { theme } = useTheme();

  const getWrapperStyle = useCallback(() => {
    return {
      style: {
        backgroundColor: `${colored ? theme.colors.secondary : theme.colors.primary}`,
      },
    };
  }, [colored]);

  return (
    <StyledButton {...getWrapperStyle()} {...rest}>
      <ButtonText fontWeight={fontWeight}>{text}</ButtonText>
      {withIcon && (
        <StyledIconContainer>
          <ArrowRight />
        </StyledIconContainer>
      )}
    </StyledButton>
  );
};

const StyledButton = styled.TouchableOpacity(
  ({ theme }) => `
    padding: ${theme.spacing.spacing8} 0;
    border-radius: ${theme.borderRadius.default};
    align-items: center;
    flex: 1;
`
);

const ButtonText = styled.Text<{ fontWeight?: boolean }>(
  ({ theme, fontWeight }) => `
      color: ${theme.colors.background};
      font-size: ${theme.fontSizes.default};
      line-height: ${theme.lineHeights.default};
      letter-spacing: ${theme.letterSpacing.default};
      font-weight: ${fontWeight ? theme.fontWeights.bold : theme.fontWeights.default};
  `
);

const StyledIconContainer = styled.View`
  position: absolute;
  right: 12px;
  top: 50%;
`;
