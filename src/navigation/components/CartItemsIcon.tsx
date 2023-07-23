import { FC, useCallback } from 'react';
import { CartIcon } from '../../../assets/svg';
import { useCart, useTheme } from '../../hooks';
import styled from 'styled-components/native';
import { View } from 'react-native';

type CartItemsIconProps = {
  isFocused: boolean;
};

export const CartItemsIcon: FC<CartItemsIconProps> = ({ isFocused }) => {
  const { theme } = useTheme();
  const { numbersOfCartItems } = useCart();

  const renderCounter = useCallback(() => {
    if (numbersOfCartItems > 0) {
      return (
        <CounterContainer isFocused={isFocused}>
          <Count>{numbersOfCartItems}</Count>
        </CounterContainer>
      );
    }
  }, [numbersOfCartItems, isFocused]);

  return (
    <View>
      <CartIcon color={isFocused ? theme.colors.secondary : theme.colors.primary} />
      {renderCounter()}
    </View>
  );
};

const CounterContainer = styled.View<CartItemsIconProps>(
  ({ theme, isFocused }) => `
    width: 14px;
    height: 14px;
    background-color: ${isFocused ? theme.colors.secondary : theme.colors.primary};
    border-radius: ${theme.borderRadius.full};
    position: absolute;
    right: -5px;
    top: -5px;
    justify-content: center;
    align-items: center
`
);

const Count = styled.Text(
  ({ theme }) => `
    color: ${theme.colors.background};
    font-size: ${theme.fontSizes.small};
    line-height: ${theme.lineHeights.small};
    font-weight: ${theme.fontWeights.bold};
    letter-spacing: ${theme.letterSpacing.default};
`
);
