import { useContext, useMemo } from 'react';
import { BowlContext } from '../context';

export const useBowls = () => {
  const bowls = useContext(BowlContext);

  return useMemo(
    () => ({
      ...bowls,
    }),
    [bowls]
  );
};
