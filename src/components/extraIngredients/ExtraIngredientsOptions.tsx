import { useCallback } from 'react';
import { useExtraIngredients } from '../../hooks/useExtraIngredients';
import { FlexColumn } from '../layout';
import { Checkbox, Label } from '../inputs';
import { Loader } from '../Loader';
import { convertToTwoDecimals } from '../../utils';

export const ExtraIngredientsOptions = () => {
  const { extraIngredients, selectedExtraIngredients, setSelectedExtraIngredients, loading } =
    useExtraIngredients();

  const isChecked = useCallback(
    (id: string) => Boolean(selectedExtraIngredients.includes(id)),
    [selectedExtraIngredients]
  );

  const selectExtraIngredientsHandler = (id: string) => {
    if (selectedExtraIngredients.includes(id)) {
      setSelectedExtraIngredients(
        selectedExtraIngredients.filter((ingredient) => ingredient !== id)
      );
    } else {
      setSelectedExtraIngredients([...selectedExtraIngredients, id]);
    }
  };

  const renderExtraIngredients = useCallback(() => {
    if (extraIngredients) {
      return (
        <FlexColumn gap={15}>
          {extraIngredients.map((ingredient) => (
            <Checkbox
              checked={isChecked(ingredient.id)}
              setChecked={() => selectExtraIngredientsHandler(ingredient.id)}
              key={ingredient.id}>
              <Label checked={isChecked(ingredient.id)}>{`${ingredient.name} - ${
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
