/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GoalScreen from './screens/Goal';

function App(): JSX.Element {
  const StackNavigator = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StackNavigator.Navigator>
        <StackNavigator.Screen
          name="Home"
          component={GoalScreen}
          options={{
            headerShown: false,
          }}
        />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default App;
