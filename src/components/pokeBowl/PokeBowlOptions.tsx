import { useCallback } from 'react';
import { useBowls, useFavouriteDishes } from '../../hooks';
import { Label, Radio } from '../inputs';
import { getFirstWord } from '../../utils';
import { Loader } from '../Loader';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Bowl, HomeStackParamList, Screens } from '../../types';
import { FlatList } from 'react-native-gesture-handler';

export const PokeBowlOptions = () => {
  const { setSelectedBowl, selectedBowl, bowls, loading } = useBowls();
  const { params } = useRoute<RouteProp<HomeStackParamList, Screens.FirstStep>>();
  const { setChangedFavouriteDish } = useFavouriteDishes();

  const isChecked = useCallback(
    (id: string) => Boolean(selectedBowl.id === id),
    [selectedBowl, bowls]
  );

  const trigerFunctionsHandler = useCallback(
    (item: Bowl) => {
      if (params) {
        if (!params.isFavouriteEdit) {
          setSelectedBowl(item);
        } else {
          setSelectedBowl(item);
          setChangedFavouriteDish('bowl', item);
        }
      } else {
        setSelectedBowl(item);
      }
    },
    [params, selectedBowl]
  );

  return loading ? (
    <Loader />
  ) : (
    <FlatList
      scrollEnabled={false}
      data={bowls}
      renderItem={({ item }) => (
        <Radio
          key={item.id}
          setChecked={() => trigerFunctionsHandler(item)}
          checked={isChecked(item.id)}>
          <Label checked={isChecked(item.id)}>{getFirstWord(item.name)}</Label>
        </Radio>
      )}
    />
  );
};
