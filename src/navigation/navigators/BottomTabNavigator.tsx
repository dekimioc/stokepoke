import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBar } from '../components';
import { BottomTabParamList, Navigators } from '../../types';
import { CartNavigator } from './CartNavigator';
import { HomeNavigator } from './HomeNavigator';
import { FavouritesNavigator } from './FavouritesNavigator';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const sharedOptions = {
  headerShown: false,
};

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen name={Navigators.Home} component={HomeNavigator} options={sharedOptions} />
      <Tab.Screen
        name={Navigators.Favourites}
        component={FavouritesNavigator}
        options={sharedOptions}
      />
      <Tab.Screen name={Navigators.Cart} component={CartNavigator} options={sharedOptions} />
    </Tab.Navigator>
  );
};
