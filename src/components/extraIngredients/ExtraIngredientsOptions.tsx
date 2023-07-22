import { useCallback } from 'react';
import { useExtraIngredients } from '../../hooks';
import { FlexColumn } from '../layout';
import { Checkbox, Label } from '../inputs';
import { Loader } from '../Loader';
import { convertToTwoDecimals } from '../../utils';
import { ExtraIngredient } from '../../types';

export const ExtraIngredientsOptions = () => {
  const { extraIngredients, selectedExtraIngredients, setSelectedExtraIngredients, loading } =
    useExtraIngredients();

  const isChecked = useCallback(
    (extraIngredient: ExtraIngredient) =>
      Boolean(selectedExtraIngredients.includes(extraIngredient)),
    [selectedExtraIngredients]
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

  const renderExtraIngredients = useCallback(() => {
    if (extraIngredients) {
      return (
        <FlexColumn gap={15}>
          {extraIngredients.map((ingredient) => (
            <Checkbox
              checked={isChecked(ingredient)}
              setChecked={() => selectExtraIngredientsHandler(ingredient)}
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
