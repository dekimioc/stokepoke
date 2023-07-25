import { useCallback } from 'react';
import { useSize, useIngredients, useFavouriteDishes } from '../../hooks';
import { Loader } from '../Loader';
import { Label, Radio } from '../inputs';
import { convertToTwoDecimals, getNumberOfIngredients } from '../../utils';
import { HomeStackParamList, Screens, Size } from '../../types';
import { FlatList } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

export const SizeOptions = () => {
  const { sizes, selectedSize, setSelectedSize, loading } = useSize();
  const { setMaximumIngredientsPerSize } = useIngredients();
  const { params } = useRoute<RouteProp<HomeStackParamList, Screens.SecondStep>>();
  const { setChangedFavouriteDish } = useFavouriteDishes();

  const isChecked = useCallback((id: string) => Boolean(selectedSize.id === id), [selectedSize]);

  const selectSizeHandler = (size: Size) => {
    setSelectedSize(size);
    setMaximumIngredientsPerSize(getNumberOfIngredients(size.description).number);
  };

  const trigerFunctionsHandler = useCallback(
    (item: Size) => {
      if (params) {
        if (params.isFavouriteEdit) {
          selectSizeHandler(item);
          setChangedFavouriteDish('size', item);
        }
      } else {
        selectSizeHandler(item);
      }
    },
    [params, selectedSize]
  );

  return loading ? (
    <Loader />
  ) : (
    <FlatList
      scrollEnabled={false}
      data={sizes}
      renderItem={({ item }) => (
        <Radio
          key={item.id}
          setChecked={() => trigerFunctionsHandler(item)}
          checked={isChecked(item.id)}>
          <Label
            checked={isChecked(item.id)}
            extraText={getNumberOfIngredients(item.description).text}>
            {`${item.name} - ${item.currency}${convertToTwoDecimals(item.price)}`}
          </Label>
        </Radio>
      )}
    />
  );
};
