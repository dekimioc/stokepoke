import { TouchableOpacityProps } from 'react-native';

export type Bowl = {
  id: string;
  name: string;
  description: string;
  image: {
    id: number;
  };
  imagePath: string;
};

export type Size = {
  id: string;
  name: string;
  description: string;
  currency: string;
  price: number;
};

export type Base = {
  id: string;
  name: string;
  description: string;
  image: {
    id: number;
  };
  imagePath: string;
};

export type Sauce = {
  id: string;
  name: string;
  description: string;
};

export type Ingredient = {
  id: string;
  name: string;
};

export type ExtraIngredient = {
  id: string;
  name: string;
  currency: string;
  price: number;
};

export enum ButtonText {
  next = 'Next',
  back = 'Back',
  cart = 'Add to Cart',
  checkout = 'Go to checkout',
  order = 'Order More',
  proceed = 'Proceed to Checkout',
  backToCart = 'Back to Cart',
  placeOrder = 'Place Order',
  edit = 'Edit',
}
export enum Screens {
  FirstStep = 'FirstStep',
  SecondStep = 'SecondStep',
  ThirdStep = 'ThirdStep',
  FourthStep = 'FourthStep',
  Favourites = 'Favourites',
  CartOwerview = 'CartOwerview',
  Checkout = 'Checkout',
}

export enum Navigators {
  Home = 'Home',
  Cart = 'Cart',
  BottomTabNavigator = 'Bottom Tab Navigator',
}
export enum Steps {
  First = 'First',
  Second = 'Second',
  Third = 'Third',
  Fourth = 'Fourth',
}

export type CartStackParamList = {
  CartOwerview: undefined;
  Checkout: undefined;
};

export type HomeStackParamList = {
  FirstStep: undefined;
  SecondStep: undefined;
  ThirdStep: undefined;
  FourthStep: undefined;
};

export type ButtonProps = {
  text: string;
  withIcon?: boolean;
} & TouchableOpacityProps;
