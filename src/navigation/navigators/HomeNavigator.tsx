import { createStackNavigator } from '@react-navigation/stack';
import { HomeStackParamList, Screens } from '../../types';
import { FirstStep, FourthStep, SecondStep, ThirdStep } from '../../screens';

const HomeStack = createStackNavigator<HomeStackParamList>();
export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name={Screens.FirstStep} component={FirstStep} />
      <HomeStack.Screen name={Screens.SecondStep} component={SecondStep} />
      <HomeStack.Screen name={Screens.ThirdStep} component={ThirdStep} />
      <HomeStack.Screen name={Screens.FourthStep} component={FourthStep} />
    </HomeStack.Navigator>
  );
};
