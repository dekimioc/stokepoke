import { useContext, useMemo } from 'react';
import { DishContext } from '../context';

export const useFavouriteDishes = () => {
  const favouriteDishes = useContext(DishContext);

  return useMemo(
    () => ({
      ...favouriteDishes,
    }),
    [favouriteDishes]
  );
};
