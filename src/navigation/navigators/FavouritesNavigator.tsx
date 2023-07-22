import { createStackNavigator } from '@react-navigation/stack';
import { FavouritesStackParamList, HomeStackParamList, Screens } from '../../types';
import { Favourites } from '../../screens';

const FavouritesStack = createStackNavigator<FavouritesStackParamList>();

export const FavouritesNavigator = () => {
  return (
    <FavouritesStack.Navigator>
      <FavouritesStack.Screen name={Screens.Favourites} component={Favourites} />
    </FavouritesStack.Navigator>
  );
};
