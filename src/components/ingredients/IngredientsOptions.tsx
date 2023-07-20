import { useCallback } from 'react';
import { useIngredients } from '../../hooks/useIngredients';
import { Loader } from '../Loader';
import { FlexColumn } from '../layout';
import { Checkbox, Label } from '../inputs';

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
    (id: string) => Boolean(selectedIngredients.includes(id)),
    [selectedIngredients]
  );

  const selectIngredientsHandler = (id: string) => {
    if (selectedIngredients.includes(id)) {
      setSelectedIngredients(selectedIngredients.filter((ingredient) => ingredient !== id));
    } else {
      setSelectedIngredients([...selectedIngredients, id]);
    }
  };

  const renderIngredients = useCallback(() => {
    if (ingredients) {
      return (
        <FlexColumn gap={15}>
          {ingredients.map((ingredient) => (
            <Checkbox
              disabled={isReachedMaxNumbersOfIngrediants && !isChecked(ingredient.id)}
              checked={isChecked(ingredient.id)}
              setChecked={() => selectIngredientsHandler(ingredient.id)}
              key={ingredient.id}>
              <Label disabled={isReachedMaxNumbersOfIngrediants} checked={isChecked(ingredient.id)}>
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
