import { FC, useCallback } from 'react';
import { Dish } from '../../types';
import { FlexColumn } from '../layout';
import { BodyText } from '../typography';
``;
export const BaseCardContent: FC<Dish> = (dish) => {
  const {
    size: { name: sizeName },
    base: { name: baseName },
    sauce: { name: sauceName },
    ingredients,
    extraIngredient,
  } = dish;

  const getExtraIngredients = useCallback(() => {
    if (!!extraIngredient.length) {
      return extraIngredient.map((ingredient) => <BodyText text={ingredient.name} />);
    }
  }, [extraIngredient]);

  return (
    <FlexColumn marginBottom={20}>
      <BodyText text={`${sizeName}`} />
      <BodyText text={`${baseName}`} />
      <BodyText text={sauceName} />
      <BodyText
        text={ingredients.map((ingredient, index) => (index ? ', ' : '') + ingredient.name)}
      />
      {getExtraIngredients()}
    </FlexColumn>
  );
};
