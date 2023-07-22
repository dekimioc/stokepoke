import React, { useCallback } from 'react';
import { useDish, usePrice, useTheme } from '../../hooks';
import { FlexColumn, FlexRow } from '../layout';
import { BodyText, Header } from '../typography';
import { convertToTwoDecimals } from '../../utils';

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

  const { totalPrice } = usePrice();

  const getIngredients = useCallback(() => {
    if (!!ingredients.length) {
      return (
        <FlexColumn gap={0}>
          <BodyText text="Added: ingredients:" />
          <FlexColumn gap={0} paddingLeft={20}>
            {ingredients.map((ingredient) => (
              <BodyText key={ingredient.id} text={ingredient.name} />
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
            {extraIngredient.map((ingredient) => (
              <FlexRow key={ingredient.id} justifyContent="space-between">
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
      <FlexColumn gap={10}>
        <BodyText text={`${sizeName} size`} />
        <BodyText text={`${baseName} base`} />
        <BodyText text={sauceName} />
        {getIngredients()}
        {getExtraIngredients()}
      </FlexColumn>
      <BodyText text={convertToTwoDecimals(totalPrice)} />
    </>
  );
};
