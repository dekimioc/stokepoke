import { createStackNavigator } from '@react-navigation/stack';
import { FavouritesStackParamList, Screens } from '../../types';
import { FavouritesOverview } from '../../screens';

const FavouritesStack = createStackNavigator<FavouritesStackParamList>();
const sharedOptions = {
  headerShown: false,
};
export const FavouritesNavigator = () => {
  return (
    <FavouritesStack.Navigator>
      <FavouritesStack.Screen
        name={Screens.FavouritesOverview}
        component={FavouritesOverview}
        options={sharedOptions}
      />
    </FavouritesStack.Navigator>
  );
};
