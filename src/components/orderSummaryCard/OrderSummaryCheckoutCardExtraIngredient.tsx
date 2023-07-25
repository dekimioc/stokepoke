import { FC } from 'react';
import { FlexRow } from '../layout';
import { BodyText } from '../typography';
import { convertToTwoDecimals, lowercaseString } from '../../utils';

type OrderSummaryCheckoutCardExtraIngredientProps = {
  ingredient: string;
  currency: string;
  price: number;
};

export const OrderSummaryCheckoutCardExtraIngredient: FC<
  OrderSummaryCheckoutCardExtraIngredientProps
> = ({ ingredient, price, currency }) => {
  return (
    <FlexRow justifyContent="space-between">
      <BodyText text={lowercaseString(ingredient)} />
      <BodyText text={`${currency}${convertToTwoDecimals(price)}`} />
    </FlexRow>
  );
};
