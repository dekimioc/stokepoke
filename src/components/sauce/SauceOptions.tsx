import { useCallback } from 'react';
import { Loader } from '../Loader';
import { Label, Radio } from '../inputs';
import { useFavouriteDishes, useSauce } from '../../hooks';
import { FlatList } from 'react-native-gesture-handler';
import { RouteProp, useRoute } from '@react-navigation/native';
import { HomeStackParamList, Sauce, Screens } from '../../types';

export const SauceOptions = () => {
  const { sauces, selectedSauce, setSelectedSauce, loading } = useSauce();
  const { params } = useRoute<RouteProp<HomeStackParamList, Screens.SecondStep>>();
  const { setChangedFavouriteDish } = useFavouriteDishes();

  const isChecked = useCallback((id: string) => Boolean(selectedSauce.id === id), [selectedSauce]);
  const trigerFunctionsHandler = useCallback(
    (item: Sauce) => {
      if (params) {
        if (params.isFavouriteEdit) {
          setSelectedSauce(item);
          setChangedFavouriteDish('sauce', item);
        }
      } else {
        setSelectedSauce(item);
      }
    },
    [params, selectedSauce]
  );
  return loading ? (
    <Loader />
  ) : (
    <FlatList
      scrollEnabled={false}
      data={sauces}
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
