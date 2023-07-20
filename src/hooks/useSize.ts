import { useContext, useMemo } from 'react';
import { SizeContext } from '../context';

export const useSize = () => {
  const sizes = useContext(SizeContext);

  return useMemo(
    () => ({
      ...sizes,
    }),
    [sizes]
  );
};
