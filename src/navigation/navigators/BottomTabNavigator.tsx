import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBar } from '../components';
import { Favourites } from '../../screens';
import { Navigators, Screens } from '../../types';
import { CartNavigator } from './CartNavigator';
import { HomeNavigator } from './HomeNavigator';

const Tab = createBottomTabNavigator();

const sharedOptions = {
  headerShown: false,
};

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen name={Navigators.Home} component={HomeNavigator} options={sharedOptions} />
      <Tab.Screen name={Screens.Favourites} component={Favourites} options={sharedOptions} />
      <Tab.Screen name={Navigators.Cart} component={CartNavigator} options={sharedOptions} />
    </Tab.Navigator>
  );
};
