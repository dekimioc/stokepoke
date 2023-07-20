import { createStackNavigator } from '@react-navigation/stack';
import { Cart, Checkout } from '../../screens';
import { CartStackParamList, Screens } from '../../types';

const CartStack = createStackNavigator<CartStackParamList>();

export const CartNavigator = () => {
  return (
    <CartStack.Navigator>
      <CartStack.Screen name={Screens.CartOwerview} component={Cart} />
      <CartStack.Screen name={Screens.Checkout} component={Checkout} />
    </CartStack.Navigator>
  );
};
