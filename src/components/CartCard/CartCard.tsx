import { FC } from 'react';
import { CardTitle } from '../CardTitle';
import { IconButton } from '../buttons';
import { Box, FlexRow } from '../layout';
import { StarIcon, DeleteIcon } from '../../../assets/svg';
import { useCart, useTheme } from '../../hooks';
import { CartQuantity } from './CartQuantity';
import { BaseCardContent } from '../baseCardElements';
import { Cart } from '../../types';

export const CartCard: FC<Cart> = (cartItem) => {
  const { theme } = useTheme();
  const { deleteFromCart } = useCart();

  return (
    <Box marginBottom={15}>
      <CardTitle title={cartItem.bowl.name} currency={'$'} price={'9.97'} />
      <BaseCardContent {...cartItem} />
      <FlexRow justifyContent="space-between">
        <FlexRow gap={15}>
          <IconButton
            icon={<StarIcon color={theme.colors.primary} />}
            onPress={() => console.log('primary')}
          />
          <IconButton icon={<DeleteIcon />} onPress={() => deleteFromCart(cartItem)} />
        </FlexRow>
        <CartQuantity {...cartItem} />
      </FlexRow>
    </Box>
  );
};
