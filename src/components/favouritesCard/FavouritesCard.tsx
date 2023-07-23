import { FC } from 'react';
import { CardTitle } from '../CardTitle';
import { Box, FlexColumn, FlexRow } from '../layout';
import { ButtonText, Dish } from '../../types';
import { IconButton, PrimaryButton, SecondaryButton } from '../buttons';
import { StarIcon } from '../../../assets/svg';
import { useCart, useTheme } from '../../hooks';
import { BaseCardContent } from '../baseCardElements';
import { useFavouriteDishes } from '../../hooks/useFavouriteDishes';

export const FavouritesCard: FC<Dish> = (dish) => {
  const { theme } = useTheme();
  const { deleteFavouriteDish, isFavouriteDish } = useFavouriteDishes();
  const { addToCart } = useCart();

  return (
    <Box marginBottom={15}>
      <CardTitle title={dish.bowl.name} currency={'$'} price={'100'} />
      <BaseCardContent {...dish} />
      <FlexColumn gap={15}>
        <SecondaryButton text={ButtonText.edit} />
        <FlexRow gap={15}>
          <IconButton
            icon={<StarIcon color={theme.colors.primary} />}
            onPress={() => deleteFavouriteDish(dish)}
          />
          <PrimaryButton text={ButtonText.cart} onPress={() => addToCart(dish)} />
        </FlexRow>
      </FlexColumn>
    </Box>
  );
};
