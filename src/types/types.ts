export type Bowl = {
  id: number;
  name: string;
  description: string;
  image: {
    id: number;
  };
  imagePath: string;
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
