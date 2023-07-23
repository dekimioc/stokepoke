import styled from 'styled-components/native';
import { ArrowDown, ArrowUp } from '../../../assets/svg';
import { useCart } from '../../hooks';
import { FC } from 'react';
import { Cart } from '../../types';

export const CartQuantity: FC<Cart> = (cartItem) => {
  const { decreaseQuantity, increaseQuantity } = useCart();
  return (
    <Container>
      <StyledTouchable
        disabled={cartItem.quantity === 1}
        onPress={() => decreaseQuantity(cartItem)}
        position="left">
        <ArrowDown />
      </StyledTouchable>
      <ValueContainer>
        <Value>{cartItem.quantity}</Value>
      </ValueContainer>
      <StyledTouchable onPress={() => increaseQuantity(cartItem)} position="right">
        <ArrowUp />
      </StyledTouchable>
    </Container>
  );
};

const Container = styled.View(
  ({ theme }) => `
    display: flex;
    flex-direction: row;
`
);

const StyledTouchable = styled.TouchableOpacity<{ position: string }>(
  ({ theme, position }) => `
    width: 40px;
    height: 40px;
    background-color: ${theme.colors.thernary};
    display: flex;
    justify-content: center;
    align-items: center;
`
);

const ValueContainer = styled.View(
  ({ theme }) => `
min-width: 40px;
display: flex;
justify-content: center;
border: 1px solid ${theme.colors.thernary};

`
);
const Value = styled.Text(
  ({ theme }) => `
    color: ${theme.colors.primary};
    font-size: ${theme.fontSizes.default};
    line-height: ${theme.lineHeights.default};
    font-weight: ${theme.fontWeights.default};
    letter-spacing: ${theme.letterSpacing.default};
    font-style: ${theme.fontSizes.normal};
    min-width: 40px;
    text-align: center;
`
);
