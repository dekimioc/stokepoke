import styled from 'styled-components/native';
import { ButtonProps } from '../../types';

export const SecondaryButton: React.FC<ButtonProps> = ({
  text,
  withIcon,
  fontWeight = false,
  ...rest
}) => {
  return (
    <StyledButton {...rest}>
      <ButtonText fontWeight={fontWeight}>{text}</ButtonText>
    </StyledButton>
  );
};

const StyledButton = styled.TouchableOpacity(
  ({ theme }) => `
    background: ${theme.colors.transparent};
    padding: ${theme.spacing.spacing8} 0;
    border-radius: ${theme.borderRadius.default};
    align-items: center;
    border: 1px solid  ${theme.colors.primary};
    flex: 1;
    justify-content: center
`
);

const ButtonText = styled.Text<{ fontWeight?: boolean }>(
  ({ theme, fontWeight }) => `
      color: ${theme.colors.primary};
      font-size: ${theme.fontSizes.default};
      line-height: ${theme.lineHeights.default};
      letter-spacing: ${theme.letterSpacing.default};
      font-weight: ${fontWeight ? theme.fontWeights.bold : theme.fontWeights.default};
  `
);
