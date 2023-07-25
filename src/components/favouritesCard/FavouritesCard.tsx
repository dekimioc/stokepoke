import { FC } from 'react';
import { Box, FlexColumn, FlexRow } from '../layout';
import { ButtonText, Dish, HomeScreenNavigationProps, Screens } from '../../types';
import { IconButton, PrimaryButton, SecondaryButton } from '../buttons';
import { StarIcon } from '../../../assets/svg';
import { useCart, useDish, useTheme } from '../../hooks';
import { BaseCardContent } from '../baseCardElements';
import { useFavouriteDishes } from '../../hooks/useFavouriteDishes';
import { Header } from '../typography';
import { styled } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

export const FavouritesCard: FC<Dish> = (dish) => {
  const { theme } = useTheme();
  const { deleteFavouriteDish, setSelectedFavouriteDish } = useFavouriteDishes();
  const { fillDish } = useDish();
  const { addToCart } = useCart();
  const navigation = useNavigation<HomeScreenNavigationProps>();

  const editButtonHandler = (dish: Dish) => {
    fillDish(dish);
    setSelectedFavouriteDish(dish);
    navigation.navigate(Screens.FirstStep, { isFavouriteEdit: true });
  };

  return (
    <Box marginBottom={15}>
      <Wrapper>
        <Header text={`${dish.bowl.name}`} />
        <Header text={`${dish.size.currency}${dish.size.price}`} />
      </Wrapper>
      <BaseCardContent {...dish} />
      <FlexColumn gap={15}>
        <SecondaryButton text={ButtonText.edit} onPress={() => editButtonHandler(dish)} />
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

const Wrapper = styled.View(
  () => `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`
);
