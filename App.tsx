import React from 'react';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from './src/navigation/navigators/BottomTabNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AllProviders } from './src/utils';
import { Navigators, Screens } from './src/types';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

export default function App() {
  return (
    <NavigationContainer>
      <AllProviders>
        <Stack.Navigator>
          <Stack.Screen
            options={screenOptions}
            name={Navigators.BottomTabNavigator}
            component={BottomTabNavigator}
          />
        </Stack.Navigator>
      </AllProviders>
    </NavigationContainer>
  );
}
