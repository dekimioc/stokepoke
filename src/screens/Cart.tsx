import { useCallback } from 'react';
import { BodyText, CartCard, EmptyMessage, Page } from '../components';
import { useCart } from '../hooks';

export const Cart = () => {
  const { cartItems } = useCart();

  const getCartItems = useCallback(() => {
    if (!!cartItems.length) {
      return cartItems.map((item) => <CartCard {...item} />);
    } else {
      return <EmptyMessage message={'No items in cart.'} />;
    }
  }, [cartItems]);

  return (
    <Page>
      <>{getCartItems()}</>
    </Page>
  );
};
