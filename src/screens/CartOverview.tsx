import { CartCard, EmptyMessage, FlexColumn, Header, OrderSummaryCard, Page } from '../components';
import { useCart } from '../hooks';
import { FlatList } from 'react-native-gesture-handler';

export const CartOverview = () => {
  const { cartItems } = useCart();

  return (
    <Page>
      <Header text="Cart" marginBottom={20} />
      <FlexColumn marginBottom={50}>
        <FlatList
          scrollEnabled={false}
          keyExtractor={(key, i) => `${key.base.id}-${i}-${key.quantity}-${key.sauce.id}`}
          ListEmptyComponent={() => <EmptyMessage message={'No items in cart.'} />}
          data={cartItems}
          renderItem={({ item }) => <CartCard {...item} />}
        />
        {!!cartItems.length && <OrderSummaryCard />}
      </FlexColumn>
    </Page>
  );
};
