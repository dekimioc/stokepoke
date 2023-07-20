import { useContext, useMemo } from 'react';
import { BaseContext } from '../context';

export const useBase = () => {
  const bases = useContext(BaseContext);

  return useMemo(
    () => ({
      ...bases,
    }),
    [bases]
  );
};
