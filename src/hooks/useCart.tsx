import { useContext, useMemo } from 'react';
import { CartContext } from '../context';
import { ExtraIngredient } from '../types';

export const useCart = () => {
  const cart = useContext(CartContext);

  const selectedIngredientsPrice = (extraIngredient: ExtraIngredient[]) => {
    return extraIngredient.reduce((partialSum, a) => partialSum + a.price, 0);
  };

  const total = (sizePrice: number, extraIngredient: ExtraIngredient[], quantity: number) => {
    if (quantity > 1) {
      return (sizePrice + selectedIngredientsPrice(extraIngredient)) * quantity;
    } else {
      return sizePrice + selectedIngredientsPrice(extraIngredient);
    }
  };

  return useMemo(
    () => ({
      ...cart,
      total,
    }),
    [cart]
  );
};
