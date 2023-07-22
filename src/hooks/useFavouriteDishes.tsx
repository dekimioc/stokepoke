import { useContext, useEffect, useMemo } from 'react';
import { DishContext } from '../context';
import { useBase } from './useBase';
import { useBowls } from './useBowls';
import { useExtraIngredients } from './useExtraIngredients';
import { useIngredients } from './useIngredients';
import { useSauce } from './useSauce';
import { useSize } from './useSize';
import { Dish } from '../types';

export const useFavouriteDishes = () => {
  const { favouriteDishes, setFavouriteDishes, selectedFavouriteDish, setSelectedFavouriteDish } =
    useContext(DishContext);
  //   const { selectedBowl } = useBowls();
  //   const { selectedExtraIngredients } = useExtraIngredients();
  //   const { selectedIngredients } = useIngredients();
  //   const { selectedSauce } = useSauce();
  //   const { selectedSize } = useSize();

  const updateFavouritesDishes = (dish: Dish) => {
    if (favouriteDishes.includes(dish)) {
      setFavouriteDishes(favouriteDishes.filter((d) => d !== dish));
    } else {
      setFavouriteDishes([...favouriteDishes, dish]);
    }
  };

  useEffect(() => updateFavouritesDishes(selectedFavouriteDish), [selectedFavouriteDish]);

  return useMemo(
    () => ({
      favouriteDishes,
      setFavouriteDishes,
      selectedFavouriteDish,
      setSelectedFavouriteDish,
    }),
    [favouriteDishes, selectedFavouriteDish]
  );
};
