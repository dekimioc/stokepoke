import { useContext, useMemo } from 'react';
import { BowlContext } from '../context';

export const useBowls = () => {
  const { bowls, loading, error, selectedBowl, setSelectedBowl } = useContext(BowlContext);

  return useMemo(
    () => ({
      bowls,
      loading,
      error,
      selectedBowl,
      setSelectedBowl,
    }),
    [bowls]
  );
};
