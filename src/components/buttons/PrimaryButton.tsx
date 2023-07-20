import styled from 'styled-components/native';
import { ButtonProps } from '../../types';

export const PrimaryButton: React.FC<ButtonProps> = ({ text, withIcon, ...rest }) => {
  return (
    <StyledButton {...rest}>
      <ButtonText>{text}</ButtonText>
    </StyledButton>
  );
};

const StyledButton = styled.TouchableOpacity(
  ({ theme }) => `
    background: ${theme.colors.primary};
    padding: ${theme.spacing.spacing8} 0;
    border-radius: ${theme.borderRadius.default};
    align-items: center;
    flex: 1
`
);

const ButtonText = styled.Text(
  ({ theme }) => `
      color: ${theme.colors.background};
      font-size: ${theme.fontSizes.default};
      line-height: ${theme.lineHeights.default};
      letter-spacing: ${theme.letterSpacing.default}
  `
);
