import { useContext, useMemo } from 'react';
import { ExtraIngredientsContext, SizeContext } from '../context';

export const usePrice = () => {
  const {
    selectedSize: { price, currency },
  } = useContext(SizeContext);

  const { selectedExtraIngredients } = useContext(ExtraIngredientsContext);

  const selectedIngredientsPrice = useMemo(
    () => selectedExtraIngredients.reduce((partialSum, a) => partialSum + a.price, 0),
    [selectedExtraIngredients]
  );

  const totalPrice = useMemo(
    () => price + selectedIngredientsPrice,
    [price, selectedExtraIngredients]
  );

  return useMemo(
    () => ({
      sizePrice: price,
      currency,
      selectedIngredientsPrice,
      totalPrice,
    }),
    [price, selectedIngredientsPrice]
  );
};
