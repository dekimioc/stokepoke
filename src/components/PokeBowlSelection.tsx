import { FC, useCallback } from 'react';
import { Bowl } from '../types';
import { Radio, RadioLabel } from './inputs';
import { useBowls } from '../hooks';
import { FlexColumn } from './layout';
import { getFirstWord } from '../utils';

type PokeBowlSelectionProps = {
  bowls: Bowl[] | [];
};
export const PokeBowlSelection: FC<PokeBowlSelectionProps> = ({ bowls }) => {
  const { setSelectedBowl, selectedBowl } = useBowls();

  const isChecked = useCallback((id: string) => Boolean(selectedBowl === id), [selectedBowl]);

  return (
    <FlexColumn gap={15}>
      {bowls.map((bowl) => (
        <Radio setChecked={() => setSelectedBowl(bowl.id)} checked={isChecked(bowl.id)}>
          <RadioLabel checked={isChecked(bowl.id)}>{getFirstWord(bowl.name)}</RadioLabel>
        </Radio>
      ))}
    </FlexColumn>
  );
};
