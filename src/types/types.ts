import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';

export type WithChildren = {
  children: React.ReactNode;
};

export type Bowl = {
  id: string;
  name: string;
  description: string;
  image: {
    id: number;
  };
  imagePath: string;
  [key: string]: any;
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
  FavouritesOverview = 'FavouritesOverview',
  CartOwerview = 'CartOwerview',
  CheckoutOverview = 'CheckoutOverview',
  Locations = 'Locations',
  Checkout = 'Checkout',
}

export enum Navigators {
  Home = 'Home',
  Cart = 'Cart',
  Favourites = 'Favourites',
  BottomTabNavigator = 'Bottom Tab Navigator',
  Locations = 'Locations',
}
export enum Steps {
  First = 'First',
  Second = 'Second',
  Third = 'Third',
  Fourth = 'Fourth',
}

export enum InputLabels {
  fullName = 'Full name',
  address = 'Address',
  phoneNumber = 'Phone number',
  cashCard = 'Cash or card',
  notes = 'Notes',
}

export type CartStackParamList = {
  CartOwerview: undefined;
  Checkout: undefined;
  CheckoutOverview: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Favourites: undefined;
  Cart: undefined;
};

export type HomeStackParamList = {
  FirstStep: { isFavouriteEdit?: boolean | undefined };
  SecondStep: { isFavouriteEdit?: boolean | undefined };
  ThirdStep: { isFavouriteEdit?: boolean | undefined };
  FourthStep: { isFavouriteEdit?: boolean | undefined };
  Locations: undefined;
};

export type FavouritesStackParamList = {
  FavouritesOverview: undefined;
};

export type LocationStackParamList = {
  FavouritesOverview: undefined;
};

export type ButtonProps = {
  text: string;
  withIcon?: boolean;
  fontWeight?: boolean;
} & TouchableOpacityProps;

export interface Dish {
  bowl: Bowl;
  size: Size;
  base: Base;
  ingredients: Ingredient[];
  extraIngredient: ExtraIngredient[];
  sauce: Sauce;
}

export interface Cart extends Dish {
  quantity: number;
}

export type AppNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabParamList>,
  DrawerNavigationProp<BottomTabParamList>
>;

export type HomeScreenNavigationProps = CompositeNavigationProp<
  StackNavigationProp<HomeStackParamList>,
  AppNavigationProps
>;

export type FavouritesScreenNavigationProps = CompositeNavigationProp<
  StackNavigationProp<FavouritesStackParamList>,
  AppNavigationProps
>;

export type CartScreenNavigationProps = CompositeNavigationProp<
  StackNavigationProp<CartStackParamList>,
  AppNavigationProps
>;
