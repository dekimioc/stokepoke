import { useContext, useEffect, useMemo } from 'react';
import { DishContext } from '../context';
import { useBase } from './useBase';
import { useBowls } from './useBowls';
import { useExtraIngredients } from './useExtraIngredients';
import { useIngredients } from './useIngredients';
import { useSauce } from './useSauce';
import { useSize } from './useSize';
import { baseDefaults, bowlDefaults, sauceDefaults, sizeDefaults } from '../defaults';
import { Dish } from '../types';
import { useFavouriteDishes } from './useFavouriteDishes';
import isEqual from 'lodash.isequal';

export const useDish = () => {
  const { dish, setDish } = useContext(DishContext);
  const { selectedBase, setSelectedBase } = useBase();
  const { selectedBowl, setSelectedBowl } = useBowls();
  const { selectedExtraIngredients, setSelectedExtraIngredients } = useExtraIngredients();
  const { selectedIngredients, setSelectedIngredients } = useIngredients();
  const { selectedSauce, setSelectedSauce } = useSauce();
  const { selectedSize, setSelectedSize } = useSize();

  const useReset = () => {
    setSelectedBase(baseDefaults);
    setSelectedBowl(bowlDefaults);
    setSelectedExtraIngredients([]);
    setSelectedIngredients([]);
    setSelectedSauce(sauceDefaults);
    setSelectedSize(sizeDefaults);
  };

  const fillDish = (dish: Dish) => {
    setSelectedBase(dish.base);
    setSelectedBowl(dish.bowl);
    setSelectedExtraIngredients(dish.extraIngredient);
    setSelectedIngredients(dish.ingredients);
    setSelectedSauce(dish.sauce);
    setSelectedSize(dish.size);
  };

  useEffect(() => {
    setDish({
      base: selectedBase,
      bowl: selectedBowl,
      extraIngredient: selectedExtraIngredients,
      ingredients: selectedIngredients,
      sauce: selectedSauce,
      size: selectedSize,
    });
  }, [
    selectedBase,
    selectedBowl,
    selectedExtraIngredients,
    selectedIngredients,
    selectedSauce,
    selectedSize,
  ]);

  return useMemo(
    () => ({
      dish,
      setDish,
      useReset,
      fillDish,
    }),
    [dish]
  );
};
