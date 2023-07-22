import { CompositeNavigationProp, NavigationProp, useNavigation } from '@react-navigation/native';
import { DishCard, Page, SecondaryButton } from '../components';
import { useDish } from '../hooks';
import { ButtonText, FavouritesStackParamList, HomeStackParamList, Screens } from '../types';
import { useFavouriteDishes } from '../hooks/useFavouriteDishes';
import { StackNavigationProp } from '@react-navigation/stack';
import isEqual from 'lodash.isequal';
import React from 'react';

export const FourthStep = () => {
  const { dish } = useDish();
  const { setSelectedFavouriteDish, favouriteDishes, setFavouriteDishes } = useFavouriteDishes();

  type TestProps = CompositeNavigationProp<
    NavigationProp<HomeStackParamList>,
    StackNavigationProp<FavouritesStackParamList>
  >;
  const navigation = useNavigation<TestProps>();

  const addToFavouritesAndNavigate = () => {
    if (favouriteDishes.includes(dish)) {
      setFavouriteDishes(favouriteDishes.filter((d) => isEqual(d, dish)));
    } else {
      setFavouriteDishes([...favouriteDishes, dish]);
    }
    setSelectedFavouriteDish(dish);
    navigation.navigate(Screens.Favourites);
  };

  return (
    <Page progressBar>
      <DishCard />
      {/* <SecondaryButton
        text={ButtonText.checkout}
        onPress={() => navigation.navigate(Screens.FirstStep, { dish: dish })}
      /> */}
      <SecondaryButton text={ButtonText.next} onPress={addToFavouritesAndNavigate} />
    </Page>
  );
};
