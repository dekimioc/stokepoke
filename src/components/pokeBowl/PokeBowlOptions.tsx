import { useCallback } from 'react';
import { useBowls } from '../../hooks';
import { Label, Radio } from '../inputs';
import { getFirstWord } from '../../utils';
import { Loader } from '../Loader';
import { FlexColumn } from '../layout';

export const PokeBowlOptions = () => {
  const { setSelectedBowl, selectedBowl, bowls, loading } = useBowls();

  const isChecked = useCallback((id: string) => Boolean(selectedBowl === id), [selectedBowl]);

  const renderBowls = useCallback(() => {
    if (bowls) {
      return (
        <FlexColumn gap={15}>
          {bowls.map((bowl) => (
            <Radio
              key={bowl.id}
              setChecked={() => setSelectedBowl(bowl.id)}
              checked={isChecked(bowl.id)}>
              <Label checked={isChecked(bowl.id)}>{getFirstWord(bowl.name)}</Label>
            </Radio>
          ))}
        </FlexColumn>
      );
    }
  }, [bowls, selectedBowl]);

  return loading ? <Loader /> : <>{renderBowls()}</>;
};
