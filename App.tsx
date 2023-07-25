import React from 'react';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { AllProviders } from './src/utils';
import { MainNavigator } from './src/navigation/navigators/MainNavigator';

const screenOptions = {
  headerShown: false,
};

export default function App() {
  return (
    <NavigationContainer>
      <AllProviders>
        {/* <StatusBar /> */}
        <MainNavigator />
      </AllProviders>
    </NavigationContainer>
  );
}

// <Stack.Navigator>
// <Stack.Screen
//   options={screenOptions}
//   name={Navigators.BottomTabNavigator}
//   component={BottomTabNavigator}
// />
// {/* <Stack.Screen
//   options={screenOptions}
//   name={Navigators.Locations}
//   component={LocationsNavigator}
// /> */}
// </Stack.Navigator>
