import { useContext, useMemo } from 'react';
import { CartContext } from '../context';

export const useCart = () => {
  const cart = useContext(CartContext);

  return useMemo(
    () => ({
      ...cart,
    }),
    [cart]
  );
};
