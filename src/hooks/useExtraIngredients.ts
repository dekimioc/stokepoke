import { useContext, useMemo } from 'react';
import { ExtraIngredientsContext } from '../context';

export const useExtraIngredients = () => {
  const extraIngredients = useContext(ExtraIngredientsContext);

  return useMemo(
    () => ({
      ...extraIngredients,
    }),
    [extraIngredients]
  );
};
