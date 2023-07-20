import { useContext, useMemo } from 'react';
import { IngredientsContext } from '../context';

export const useIngredients = () => {
  const ingredients = useContext(IngredientsContext);

  return useMemo(
    () => ({
      ...ingredients,
    }),
    [ingredients]
  );
};
