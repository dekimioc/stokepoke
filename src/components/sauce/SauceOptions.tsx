import { useCallback } from 'react';
import { Loader } from '../Loader';
import { Label, Radio } from '../inputs';
import { FlexColumn } from '../layout';
import { useSauce } from '../../hooks';

export const SauceOptions = () => {
  const { sauces, selectedSauce, setSelectedSauce, loading } = useSauce();

  const isChecked = useCallback((id: string) => Boolean(selectedSauce === id), [selectedSauce]);
  const renderSauces = useCallback(() => {
    if (sauces) {
      return sauces.map((sauce) => (
        <Radio
          key={sauce.id}
          setChecked={() => setSelectedSauce(sauce.id)}
          checked={isChecked(sauce.id)}>
          <Label checked={isChecked(sauce.id)}>{sauce.name}</Label>
        </Radio>
      ));
    }
  }, [sauces, selectedSauce]);

  return loading ? <Loader /> : <FlexColumn gap={15}>{renderSauces()}</FlexColumn>;
};
