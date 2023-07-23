import { useContext, useEffect, useMemo } from 'react';
import { DishContext } from '../context';
import { useBase } from './useBase';
import { useBowls } from './useBowls';
import { useExtraIngredients } from './useExtraIngredients';
import { useIngredients } from './useIngredients';
import { useSauce } from './useSauce';
import { useSize } from './useSize';
import { Dish } from '../types';
import isEqual from 'lodash.isequal';
var deepEqual = require('deep-equal');

export const useFavouriteDishes = () => {
  const { favouriteDishes, setFavouriteDishes, selectedFavouriteDish, setSelectedFavouriteDish } =
    useContext(DishContext);

  const updateFavouritesDishes = (dish: Dish) => {
    if (!!favouriteDishes.length) {
      favouriteDishes.map((favourite) => {
        if (isEqual(favourite, dish)) {
          setFavouriteDishes(favouriteDishes.filter((d) => !isEqual(d, dish)));
        } else {
          setFavouriteDishes([...favouriteDishes, dish]);
        }
      });
    } else {
      setFavouriteDishes([dish]);
    }
  };

  const deleteFavouriteDish = (dish: Dish) => {
    favouriteDishes.map((favourite) => {
      if (isEqual(favourite, dish)) {
        setFavouriteDishes(favouriteDishes.filter((d) => !isEqual(d, dish)));
      }
    });
  };

  const isFavouriteDish = (dish: Dish) =>
    favouriteDishes.map((favourite) => isEqual(favourite, dish));

  return useMemo(
    () => ({
      favouriteDishes,
      setFavouriteDishes,
      selectedFavouriteDish,
      setSelectedFavouriteDish,
      updateFavouritesDishes,
      deleteFavouriteDish,
      isFavouriteDish,
    }),
    [favouriteDishes, selectedFavouriteDish, deleteFavouriteDish, updateFavouritesDishes]
  );
};
