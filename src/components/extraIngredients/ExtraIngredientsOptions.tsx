import { useCallback } from 'react';
import { useExtraIngredients, useFavouriteDishes } from '../../hooks';
import { FlexColumn } from '../layout';
import { Checkbox, Label } from '../inputs';
import { Loader } from '../Loader';
import { convertToTwoDecimals } from '../../utils';
import { ExtraIngredient, HomeStackParamList, Screens } from '../../types';
import { RouteProp, useRoute } from '@react-navigation/native';

export const ExtraIngredientsOptions = () => {
  const { extraIngredients, selectedExtraIngredients, setSelectedExtraIngredients, loading } =
    useExtraIngredients();
  const { params } = useRoute<RouteProp<HomeStackParamList, Screens.ThirdStep>>();
  const { changeExtraIngredientsInFavourite } = useFavouriteDishes();
  const isChecked = useCallback(
    (extraIngredient: ExtraIngredient) =>
      selectedExtraIngredients.some((ingr) => ingr.id === extraIngredient.id),
    [selectedExtraIngredients, extraIngredients]
  );

  const selectExtraIngredientsHandler = (extraIngredient: ExtraIngredient) => {
    if (selectedExtraIngredients.includes(extraIngredient)) {
      setSelectedExtraIngredients(
        selectedExtraIngredients.filter((ingredient) => ingredient.id !== extraIngredient.id)
      );
    } else {
      setSelectedExtraIngredients([...selectedExtraIngredients, extraIngredient]);
    }
  };

  const trigerFunctionsHandler = useCallback(
    (item: ExtraIngredient) => {
      if (params) {
        if (params.isFavouriteEdit) {
          selectExtraIngredientsHandler(item);
          changeExtraIngredientsInFavourite(item, 'extraIngredient');
        }
      } else {
        selectExtraIngredientsHandler(item);
      }
    },
    [params, selectedExtraIngredients]
  );

  const renderExtraIngredients = useCallback(() => {
    if (extraIngredients) {
      return (
        <FlexColumn gap={24}>
          {extraIngredients.map((ingredient) => (
            <Checkbox
              checked={isChecked(ingredient)}
              setChecked={() => trigerFunctionsHandler(ingredient)}
              key={ingredient.id}>
              <Label checked={isChecked(ingredient)}>{`${ingredient.name} - ${
                ingredient.currency
              }${convertToTwoDecimals(ingredient.price)}`}</Label>
            </Checkbox>
          ))}
        </FlexColumn>
      );
    }
  }, [extraIngredients, selectedExtraIngredients]);

  return loading ? <Loader /> : <>{renderExtraIngredients()}</>;
};
