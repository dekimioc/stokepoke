import React, { useCallback } from 'react';
import { useDish, usePrice, useTheme } from '../../hooks';
import { FlexColumn, FlexRow } from '../layout';
import { BodyText, Header } from '../typography';
import { DishCardFullPrice } from './DishCardFullPrice';

export const DishCardContent = () => {
  const { dish } = useDish();
  const { theme } = useTheme();
  const {
    size: { name: sizeName },
    base: { name: baseName },
    sauce: { name: sauceName },
    ingredients,
    extraIngredient,
  } = dish;

  const getIngredients = useCallback(() => {
    if (!!ingredients.length) {
      return (
        <FlexColumn gap={0}>
          <BodyText text="Added: ingredients:" />
          <FlexColumn gap={0} paddingLeft={20}>
            {ingredients.map((ingredient, i) => (
              <BodyText key={`${ingredient.id}-${i}`} text={ingredient.name} />
            ))}
          </FlexColumn>
        </FlexColumn>
      );
    }
  }, [ingredients, theme]);

  const getExtraIngredients = useCallback(() => {
    if (!!extraIngredient.length) {
      return (
        <>
          <FlexColumn gap={14}>
            {extraIngredient.map((ingredient, i) => (
              <FlexRow key={`${ingredient.id}-${i}`} justifyContent="space-between">
                <BodyText text={ingredient.name} />
                <Header text={`${ingredient.currency}${ingredient.price}`} />
              </FlexRow>
            ))}
          </FlexColumn>
        </>
      );
    }
  }, [extraIngredient]);

  return (
    <>
      <FlexColumn gap={10} marginBottom={20}>
        <BodyText text={`${sizeName} size`} />
        <BodyText text={`${baseName} base`} />
        <BodyText text={sauceName} />
        {getIngredients()}
        {getExtraIngredients()}
      </FlexColumn>
      <DishCardFullPrice />
    </>
  );
};
