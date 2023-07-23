import { CompositeNavigationProp, NavigationProp, useNavigation } from '@react-navigation/native';
import {
  DishCard,
  FlexColumn,
  FlexRow,
  IconButton,
  Page,
  PrimaryButton,
  SecondaryButton,
} from '../components';
import { useCart, useDish, useTheme } from '../hooks';
import {
  ButtonText,
  CartStackParamList,
  Dish,
  FavouritesStackParamList,
  HomeStackParamList,
  Navigators,
  Screens,
} from '../types';
import { useFavouriteDishes } from '../hooks/useFavouriteDishes';
import { StackNavigationProp } from '@react-navigation/stack';
import isEqual from 'lodash.isequal';
import React, { useCallback, useState } from 'react';
import { StarIcon } from '../../assets/svg';
import { dishDefaults } from '../defaults';

export const FourthStep = () => {
  const { dish, setDish } = useDish();
  const { setSelectedFavouriteDish, favouriteDishes, setFavouriteDishes, updateFavouritesDishes } =
    useFavouriteDishes();
  const { addToCart } = useCart();
  const { theme } = useTheme();

  type FourthStepProps = CompositeNavigationProp<
    NavigationProp<HomeStackParamList>,
    StackNavigationProp<FavouritesStackParamList>
  >;
  const navigation = useNavigation<FourthStepProps>();

  const [a, setA] = useState(true);
  const iconsColorHandler = useCallback(() => {
    let pathColor = '';
    let color = '';

    if (a) {
      pathColor = theme.colors.primary;
      color = theme.colors.background;
    } else {
      pathColor = theme.colors.background;
      color = theme.colors.primary;
    }
    return { pathColor, color };
  }, [a]);

  const addToCartAndNavigate = () => {
    addToCart(dish);
    navigation.navigate({ name: Screens.FirstStep, key: Screens.FirstStep });
    setDish(dishDefaults);
  };

  return (
    <Page progressBar>
      <DishCard />
      <FlexColumn gap={15}>
        <FlexRow gap={15}>
          <IconButton
            onPress={() => updateFavouritesDishes(dish)}
            icon={
              <StarIcon
                clipPath={iconsColorHandler().pathColor}
                color={iconsColorHandler().color}
              />
            }
          />
          <PrimaryButton text={ButtonText.cart} onPress={addToCartAndNavigate} />
        </FlexRow>
        <SecondaryButton text={ButtonText.checkout} />
      </FlexColumn>
    </Page>
  );
};
