import { FC, useCallback } from 'react';
import { BodyText } from '../typography';
import { Cart } from '../../types';
import { FlexColumn, FlexRow } from '../layout';
import { FlatList } from 'react-native-gesture-handler';
import { OrderSummaryCheckoutCardExtraIngredient } from './OrderSummaryCheckoutCardExtraIngredient';

export const OrderSummaryCheckoutCardContent: FC<Cart> = (cartItem) => {
  return (
    <FlexColumn marginBottom={20}>
      <FlexRow marginBottom={10} justifyContent="space-between">
        <FlexRow maxWidth={'60%'} justifyContent="space-between">
          <BodyText text={cartItem.bowl.name} />
          <BodyText text={`x${cartItem.quantity}`} />
        </FlexRow>
        <BodyText text={'$6.99'} />
      </FlexRow>
      <FlexColumn paddingLeft={20}>
        <BodyText text="With:" />
        <FlatList
          scrollEnabled={false}
          ListEmptyComponent={<></>}
          data={cartItem.extraIngredient}
          keyExtractor={(item, i) => `${item.id}-${i}`}
          renderItem={({ item }) => (
            <OrderSummaryCheckoutCardExtraIngredient
              ingredient={item.name}
              currency={item.currency}
              price={item.price}
            />
          )}
        />
      </FlexColumn>
    </FlexColumn>
  );
};
