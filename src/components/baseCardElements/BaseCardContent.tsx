import { FC, useCallback } from 'react';
import { Cart, Dish } from '../../types';
import { FlexColumn } from '../layout';
import { BodyText } from '../typography';
import { useExtraIngredients, useIngredients } from '../../hooks';

export const BaseCardContent: FC<Dish | Cart> = (dish) => {
  const {
    size: { name: sizeName },
    base: { name: baseName },
    sauce: { name: sauceName },
  } = dish;

  const { selectedExtraIngredients } = useExtraIngredients();
  const { selectedIngredients } = useIngredients();

  const getExtraIngredients = useCallback(() => {
    if (!!selectedExtraIngredients.length) {
      return selectedExtraIngredients.map((ingredient, i) => (
        <BodyText key={`${ingredient.id}-${i}`} text={ingredient.name} />
      ));
    }
  }, [selectedExtraIngredients]);

  return (
    <FlexColumn marginBottom={20}>
      <BodyText text={`${sizeName} size`} />
      <BodyText text={`${baseName}`} />
      <BodyText text={sauceName} />
      <BodyText
        text={selectedIngredients.map((ingredient, index) => (index ? ', ' : '') + ingredient.name)}
      />
      {getExtraIngredients()}
    </FlexColumn>
  );
};
