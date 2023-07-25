import { FC, useCallback } from 'react';
import { CardTitle } from '../CardTitle';
import { IconButton } from '../buttons';
import { Box, FlexRow } from '../layout';
import { StarIcon, DeleteIcon } from '../../../assets/svg';
import { useCart, useTheme } from '../../hooks';
import { CartQuantity } from './CartQuantity';
import { Cart } from '../../types';
import { convertToTwoDecimals } from '../../utils';
import { useFavouriteDishes } from '../../hooks/useFavouriteDishes';
import omit from 'lodash.omit';
import { BodyText } from '../typography';
import { FlatList } from 'react-native';

export const CartCard: FC<Cart> = (cartItem) => {
  const { theme } = useTheme();
  const { deleteFromCart, total } = useCart();
  const { isFavouriteDish, updateFavouritesDishes } = useFavouriteDishes();

  const getExtraIngredients = useCallback(() => {
    return (
      <FlatList
        scrollEnabled={false}
        keyExtractor={(item, i) => `${item.id}-${item.price}`}
        ListEmptyComponent={() => <BodyText text={'-'} />}
        data={cartItem.extraIngredient}
        renderItem={({ item }) => <BodyText text={item.name} />}
      />
    );
  }, [cartItem]);

  return (
    <Box marginBottom={15}>
      <CardTitle
        title={cartItem.bowl.name}
        currency={cartItem.size.currency}
        price={convertToTwoDecimals(
          total(cartItem.size.price, cartItem.extraIngredient, cartItem.quantity)
        )}
      />
      <BodyText text={`${cartItem.size.name} size`} />
      <BodyText text={cartItem.base.name} />
      <BodyText text={cartItem.sauce.name} />
      <BodyText
        text={cartItem.ingredients.map(
          (ingredient, index) => (index ? ', ' : '') + ingredient.name
        )}
      />
      {getExtraIngredients()}
      <FlexRow justifyContent="space-between" marginTop={20}>
        <FlexRow gap={15}>
          <IconButton
            icon={
              <StarIcon
                color={
                  isFavouriteDish(omit(cartItem, ['quantity']))
                    ? theme.colors.primary
                    : theme.colors.transparent
                }
                clipPath={
                  isFavouriteDish(omit(cartItem, ['quantity']))
                    ? theme.colors.background
                    : theme.colors.primary
                }
              />
            }
            onPress={() => updateFavouritesDishes(omit(cartItem, ['quantity']))}
          />
          <IconButton icon={<DeleteIcon />} onPress={() => deleteFromCart(cartItem)} />
        </FlexRow>
        <CartQuantity {...cartItem} />
      </FlexRow>
    </Box>
  );
};
