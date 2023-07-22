import { useCallback, useEffect } from 'react';
import { useBowls } from '../../hooks';
import { Label, Radio } from '../inputs';
import { getFirstWord } from '../../utils';
import { Loader } from '../Loader';
import { FlexColumn } from '../layout';
import { RouteProp, useRoute } from '@react-navigation/native';
import { HomeStackParamList } from '../../types';

export const PokeBowlOptions = () => {
  const { params } = useRoute<RouteProp<HomeStackParamList>>();
  const { setSelectedBowl, selectedBowl, bowls, loading } = useBowls();

  useEffect(() => {
    if (params?.dish) {
      setSelectedBowl(params.dish.bowl);
    }
  }, [params]);

  const isChecked = useCallback((id: string) => Boolean(selectedBowl.id === id), [selectedBowl]);

  const renderBowls = useCallback(() => {
    if (bowls) {
      return (
        <FlexColumn gap={15}>
          {bowls.map((bowl) => (
            <Radio
              key={bowl.id}
              setChecked={() => setSelectedBowl(bowl)}
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
