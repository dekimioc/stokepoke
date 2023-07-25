import { createStackNavigator } from '@react-navigation/stack';
import { HomeStackParamList, Screens } from '../../types';
import { FirstStep, FourthStep, Locations, SecondStep, ThirdStep } from '../../screens';
import { useNavigation } from '@react-navigation/native';

const sharedOptions = {
  headerShown: false,
};

const HomeStack = createStackNavigator<HomeStackParamList>();
export const HomeNavigator = () => {
  const navigation = useNavigation<HomeStackParamList>();
  const activeScreenIndex = navigation;

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name={Screens.FirstStep} component={FirstStep} options={sharedOptions} />
      <HomeStack.Screen name={Screens.SecondStep} component={SecondStep} options={sharedOptions} />
      <HomeStack.Screen name={Screens.ThirdStep} component={ThirdStep} options={sharedOptions} />
      <HomeStack.Screen name={Screens.FourthStep} component={FourthStep} options={sharedOptions} />
      <HomeStack.Screen name={Screens.Locations} component={Locations} options={sharedOptions} />
    </HomeStack.Navigator>
  );
};
