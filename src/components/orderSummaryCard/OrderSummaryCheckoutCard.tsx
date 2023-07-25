import { FlatList } from 'react-native-gesture-handler';
import { useCart } from '../../hooks';
import { Box, FlexColumn, FlexRow } from '../layout';
import { BodyText, Header } from '../typography';
import { OrderSummaryCheckoutCardContent } from './OrderSummaryCheckoutCardContent';
import { OrderSummaryCheckoutCardTotal } from './OrderSummaryCheckoutCardTotal';

export const OrderSummaryCheckoutCard = () => {
  const { cartItems } = useCart();
  return (
    <Box marginBottom={30}>
      <FlexColumn gap={20}>
        <Header text="Order summary" />
        <FlatList
          scrollEnabled={false}
          data={cartItems}
          renderItem={({ item }) => <OrderSummaryCheckoutCardContent {...item} />}
        />
        <FlexRow justifyContent="flex-end">
          <BodyText text="Free delivery" />
        </FlexRow>
        <OrderSummaryCheckoutCardTotal />
      </FlexColumn>
    </Box>
  );
};
