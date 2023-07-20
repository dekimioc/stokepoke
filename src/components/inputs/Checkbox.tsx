import { useCallback } from 'react';
import { BlankCheckIcon, CheckIcon, DisabledCheckIcon } from '../../../assets/svg';
import styled from 'styled-components/native';
import { TouchableOpacityProps } from 'react-native';

type CheckboxProps = {
  checked: boolean;
  setChecked: (arg: boolean) => void;
  disabled?: boolean;
} & TouchableOpacityProps &
  React.PropsWithChildren;

export const Checkbox: React.FC<CheckboxProps> = ({
  children,
  checked,
  setChecked,
  disabled = false,
  ...rest
}) => {
  const getIcon = useCallback(() => {
    if (checked) {
      return <CheckIcon />;
    }
    if (disabled && !checked) {
      return <DisabledCheckIcon />;
    }
    return <BlankCheckIcon />;
  }, [checked, disabled]);

  return (
    <StyledCheckbox disabled={disabled} onPress={() => setChecked(!checked)} {...rest}>
      {getIcon()}
      {children}
    </StyledCheckbox>
  );
};

const StyledCheckbox = styled.TouchableOpacity(
  ({ theme }) => `
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${theme.spacing.spacing8};
`
);
