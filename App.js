import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Start from './src/Component/Start';
import Login from './src/Component/Login';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Start"
          component={Start}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{animation: "slide_from_right"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
