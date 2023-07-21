import { useCallback } from 'react';
import { Loader } from '../Loader';
import { Label, Radio } from '../inputs';
import { FlexColumn } from '../layout';
import { useBase } from '../../hooks';

export const BaseOptions = () => {
  const { bases, selectedBase, setSelectedBase, loading } = useBase();

  const isChecked = useCallback((id: string) => Boolean(selectedBase.id === id), [selectedBase]);

  const renderSizes = useCallback(() => {
    if (bases) {
      return (
        <FlexColumn gap={15}>
          {bases.map((base) => (
            <Radio
              key={base.id}
              setChecked={() => setSelectedBase(base)}
              checked={isChecked(base.id)}>
              <Label checked={isChecked(base.id)}>{base.name}</Label>
            </Radio>
          ))}
        </FlexColumn>
      );
    }
  }, [bases, selectedBase]);

  return loading ? <Loader /> : <>{renderSizes()}</>;
};
