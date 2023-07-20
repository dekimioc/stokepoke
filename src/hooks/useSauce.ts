import { useContext, useMemo } from 'react';
import { SauceContext } from '../context';

export const useSauce = () => {
  const sauces = useContext(SauceContext);

  return useMemo(
    () => ({
      ...sauces,
    }),
    [sauces]
  );
};
