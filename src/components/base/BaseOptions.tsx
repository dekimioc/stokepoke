import { useCallback } from 'react';
import { Loader } from '../Loader';
import { Label, Radio } from '../inputs';
import { useBase, useFavouriteDishes } from '../../hooks';
import { FlatList } from 'react-native-gesture-handler';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Base, HomeStackParamList, Screens } from '../../types';

export const BaseOptions = () => {
  const { bases, selectedBase, setSelectedBase, loading } = useBase();
  const { params } = useRoute<RouteProp<HomeStackParamList, Screens.SecondStep>>();
  const { setChangedFavouriteDish } = useFavouriteDishes();

  const isChecked = useCallback((id: string) => Boolean(selectedBase.id === id), [selectedBase]);

  const trigerFunctionsHandler = useCallback(
    (item: Base) => {
      if (params) {
        if (params.isFavouriteEdit) {
          setSelectedBase(item);
          setChangedFavouriteDish('base', item);
        }
      } else {
        setSelectedBase(item);
      }
    },
    [params, selectedBase]
  );
  return loading ? (
    <Loader />
  ) : (
    <FlatList
      scrollEnabled={false}
      data={bases}
      renderItem={({ item }) => (
        <Radio
          key={item.id}
          setChecked={() => trigerFunctionsHandler(item)}
          checked={isChecked(item.id)}>
          <Label checked={isChecked(item.id)}>{item.name}</Label>
        </Radio>
      )}
    />
  );
};
