import { useContext, useEffect, useMemo } from 'react';
import { DishContext } from '../context';
import { useBase } from './useBase';
import { useBowls } from './useBowls';
import { useExtraIngredients } from './useExtraIngredients';
import { useIngredients } from './useIngredients';
import { useSauce } from './useSauce';
import { useSize } from './useSize';

export const useDish = () => {
  const { dish, setDish } = useContext(DishContext);
  const { selectedBase } = useBase();
  const { selectedBowl } = useBowls();
  const { selectedExtraIngredients } = useExtraIngredients();
  const { selectedIngredients } = useIngredients();
  const { selectedSauce } = useSauce();
  const { selectedSize } = useSize();

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
    }),
    [dish]
  );
};
