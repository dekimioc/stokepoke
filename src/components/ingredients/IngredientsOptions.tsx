import { useCallback } from 'react';
import { useIngredients } from '../../hooks/useIngredients';
import { Loader } from '../Loader';
import { FlexColumn } from '../layout';
import { Checkbox, Label } from '../inputs';
import { Ingredient } from '../../types';

export const IngredientsOptions = () => {
  const {
    ingredients,
    selectedIngredients,
    setSelectedIngredients,
    loading,
    maximumIngredientsPerSize,
    isReachedMaxNumbersOfIngrediants,
  } = useIngredients();

  const isChecked = useCallback(
    (ingredient: Ingredient) => Boolean(selectedIngredients.includes(ingredient)),
    [selectedIngredients]
  );

  const selectIngredientsHandler = (ingredient: Ingredient) => {
    if (selectedIngredients.includes(ingredient)) {
      setSelectedIngredients(selectedIngredients.filter((ing) => ing.id !== ingredient.id));
    } else {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
  };

  const renderIngredients = useCallback(() => {
    if (ingredients) {
      return (
        <FlexColumn gap={15}>
          {ingredients.map((ingredient) => (
            <Checkbox
              disabled={isReachedMaxNumbersOfIngrediants && !isChecked(ingredient)}
              checked={isChecked(ingredient)}
              setChecked={() => selectIngredientsHandler(ingredient)}
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
