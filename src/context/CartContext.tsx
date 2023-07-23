import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { Cart, Dish } from '../types';
import isEqual from 'lodash.isequal';
import omit from 'lodash.omit';
import { getLocalObject, setLocalObject } from '../utils/localStorage';

type CartContextType = {
  cartItems: Cart[];
  setCartItems: (arg: Cart[]) => void;
  addToCart: (arg: Cart | Dish) => void;
  deleteFromCart: (arg: Cart) => void;
  decreaseQuantity: (arg: Cart) => void;
  increaseQuantity: (arg: Cart) => void;
  numbersOfCartItems: number;
};

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  setCartItems: () => {},
  addToCart: () => {},
  deleteFromCart: () => {},
  decreaseQuantity: () => {},
  increaseQuantity: () => {},
  numbersOfCartItems: 0,
});
export const CartProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Cart[]>([]);
  const [numbersOfCartItems, setNumbersOfCartItems] = useState<number>(0);

  useEffect(() => {
    getLocalObject('cart', (cart) => setCartItems(cart));
  }, []);

  useEffect(() => {
    setLocalObject('cart', cartItems);
    setNumbersOfCartItems(cartItems.length);
  }, [cartItems]);

  const addToCart = (cartItem: Dish) => {
    let items = [...cartItems];
    if (!!cartItems.length) {
      let item: Cart = items.filter((it) =>
        isEqual(omit(it, ['quantity']), omit(cartItem, ['quantity']))
      )[0];
      if (item) {
        item.quantity++;
        const match = items.filter(
          (i) => !isEqual(omit(i, ['quantity']), omit(cartItem, ['quantity']))
        );
        setCartItems([...match, item]);
      } else {
        setCartItems([...cartItems, { ...cartItem, quantity: 1 }]);
      }
    } else {
      setCartItems([...cartItems, { ...cartItem, quantity: 1 }]);
    }
  };

  const decreaseQuantity = (cartItem: Cart) => {
    let items = [...cartItems];
    let item: Cart = items.filter((it) =>
      isEqual(omit(it, ['quantity']), omit(cartItem, ['quantity']))
    )[0];
    item.quantity = item.quantity - 1;
    setCartItems(items);
  };

  const increaseQuantity = (cartItem: Cart) => {
    let items = [...cartItems];
    let item: Cart = items.filter((it) =>
      isEqual(omit(it, ['quantity']), omit(cartItem, ['quantity']))
    )[0];
    item.quantity = item.quantity + 1;
    setCartItems(items);
  };

  const deleteFromCart = (cartItem: Cart) => {
    cartItems.map((item) => {
      if (isEqual(omit(item, ['quantity']), omit(cartItem, ['quantity']))) {
        setCartItems(
          cartItems.filter(
            (item) => !isEqual(omit(item, ['quantity']), omit(cartItem, ['quantity']))
          )
        );
      }
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        deleteFromCart,
        decreaseQuantity,
        increaseQuantity,
        numbersOfCartItems,
      }}>
      {children}
    </CartContext.Provider>
  );
};
