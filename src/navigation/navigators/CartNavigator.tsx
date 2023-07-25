import { createStackNavigator } from '@react-navigation/stack';
import { CartOverview, Checkout, CheckoutOverview } from '../../screens';
import { CartStackParamList, Screens } from '../../types';

const CartStack = createStackNavigator<CartStackParamList>();

const sharedOptions = {
  headerShown: false,
};
export const CartNavigator = () => {
  return (
    <CartStack.Navigator>
      <CartStack.Screen
        name={Screens.CartOwerview}
        component={CartOverview}
        options={sharedOptions}
      />
      <CartStack.Screen
        name={Screens.CheckoutOverview}
        component={CheckoutOverview}
        options={sharedOptions}
      />
      <CartStack.Screen name={Screens.Checkout} component={Checkout} options={sharedOptions} />
    </CartStack.Navigator>
  );
};
