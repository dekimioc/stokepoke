import { useCallback, useEffect, useState } from 'react';
import { useIngredients } from '../../hooks/useIngredients';
import { Loader } from '../Loader';
import { FlexColumn } from '../layout';
import { Checkbox, Label } from '../inputs';
import { HomeStackParamList, Ingredient, Screens } from '../../types';
import { RouteProp, useFocusEffect, useRoute } from '@react-navigation/native';
import { useFavouriteDishes } from '../../hooks';

export const IngredientsOptions = () => {
  const {
    ingredients,
    selectedIngredients,
    setSelectedIngredients,
    loading,
    maximumIngredientsPerSize,
    isReachedMaxNumbersOfIngrediants,
  } = useIngredients();
  const { params } = useRoute<RouteProp<HomeStackParamList, Screens.SecondStep>>();
  const { changeIngredientsInFavourites } = useFavouriteDishes();

  const isChecked = useCallback(
    (ingredient: Ingredient) => selectedIngredients.some((ingr) => ingr.id === ingredient.id),
    [selectedIngredients, ingredients]
  );

  const selectIngredientsHandler = (ingredient: Ingredient) => {
    if (selectedIngredients.includes(ingredient)) {
      setSelectedIngredients(selectedIngredients.filter((ing) => ing.id !== ingredient.id));
    } else {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
  };

  const trigerFunctionsHandler = useCallback(
    (item: Ingredient) => {
      if (params) {
        if (params.isFavouriteEdit) {
          selectIngredientsHandler(item);
          changeIngredientsInFavourites(item, 'ingredients');
        } else {
          selectIngredientsHandler(item);
        }
      } else {
        selectIngredientsHandler(item);
      }
    },
    [params, selectedIngredients]
  );

  const renderIngredients = useCallback(() => {
    if (ingredients) {
      return (
        <FlexColumn gap={15}>
          {ingredients.map((ingredient) => (
            <Checkbox
              disabled={isReachedMaxNumbersOfIngrediants && !isChecked(ingredient)}
              checked={isChecked(ingredient)}
              setChecked={() => trigerFunctionsHandler(ingredient)}
              key={ingredient.id}>
              <Label disabled={isReachedMaxNumbersOfIngrediants} checked={isChecked(ingredient)}>
                {ingredient.name}
              </Label>
            </Checkbox>
          ))}
        </FlexColumn>
      );
    }
  }, [ingredients, selectedIngredients, maximumIngredientsPerSize]);

  return loading ? <Loader /> : <>{renderIngredients()}</>;
};
