import styled from 'styled-components/native';
import { TouchableOpacityProps } from 'react-native';
import { useCallback } from 'react';
import { useTheme } from '../../hooks';

type RadioProps = {
  checked: boolean;
  setChecked: (arg: boolean) => void;
} & TouchableOpacityProps &
  React.PropsWithChildren;

export const Radio: React.FC<RadioProps> = ({ children, checked, setChecked, ...rest }) => {
  const { theme } = useTheme();

  const getCircleStyle = useCallback(() => {
    return {
      style: {
        borderColor: checked ? theme.colors.secondary : theme.colors.primary,
      },
    };
  }, [checked]);

  const getInnerCircleStyle = useCallback(() => {
    return {
      style: {
        backgroundColor: checked ? theme.colors.secondary : theme.colors.transparent,
      },
    };
  }, [checked]);

  return (
    <Container onPress={() => setChecked(!checked)} {...rest}>
      <Circle {...getCircleStyle()}>
        <InnerCircle {...getInnerCircleStyle()} />
      </Circle>
      {children}
    </Container>
  );
};

const Container = styled.TouchableOpacity(
  ({ theme }) => `
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${theme.spacing.spacing15};
    padding-bottom: ${theme.spacing.spacing15};
`
);

const Circle = styled.View(
  ({ theme }) => `
    border: 2px solid;
    border-radius: ${theme.borderRadius.full};
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
`
);

const InnerCircle = styled.View(
  ({ theme }) => `
      border-radius: ${theme.borderRadius.full};
      width: 16px;
      height: 16px;
  `
);
