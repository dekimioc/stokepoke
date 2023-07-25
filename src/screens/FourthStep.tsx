import React from 'react';
import { CompositeNavigationProp, useFocusEffect, useNavigation } from '@react-navigation/native';
import {
  DishCard,
  FlexColumn,
  FlexRow,
  IconButton,
  Page,
  PrimaryButton,
  SecondaryButton,
} from '../components';
import { useCart, useDish, useSteps, useTheme } from '../hooks';
import {
  ButtonText,
  CartScreenNavigationProps,
  HomeScreenNavigationProps,
  Screens,
} from '../types';
import { useFavouriteDishes } from '../hooks/useFavouriteDishes';
import { StarIcon } from '../../assets/svg';

export const FourthStep = () => {
  const { dish, useReset } = useDish();
  const { updateFavouritesDishes, isFavouriteDish } = useFavouriteDishes();
  const { addToCart } = useCart();
  const { theme } = useTheme();
  const { setCurrentStep } = useSteps();

  useFocusEffect(() => {
    setCurrentStep(4);
  });

  const navigation =
    useNavigation<CompositeNavigationProp<HomeScreenNavigationProps, CartScreenNavigationProps>>();

  const addToCartAndNavigate = () => {
    addToCart(dish);
    navigation.navigate({ name: Screens.FirstStep, key: Screens.FirstStep });
    useReset();
  };

  const goToCheckout = () => {
    addToCart(dish);
    navigation.navigate({ name: Screens.Checkout, key: Screens.Checkout });
  };

  return (
    <Page progressBar>
      <DishCard />
      <FlexColumn gap={15} marginBottom={50}>
        <FlexRow gap={15}>
          <IconButton
            onPress={() => updateFavouritesDishes(dish)}
            icon={
              <StarIcon
                color={isFavouriteDish(dish) ? theme.colors.primary : theme.colors.transparent}
                clipPath={isFavouriteDish(dish) ? theme.colors.background : theme.colors.primary}
              />
            }
          />
          <PrimaryButton text={ButtonText.cart} onPress={addToCartAndNavigate} />
        </FlexRow>
        <SecondaryButton text={ButtonText.checkout} onPress={goToCheckout} />
      </FlexColumn>
    </Page>
  );
};
