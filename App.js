import React from 'react';
import {LogBox, SafeAreaView, StatusBar, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Start from './src/Component/Start';
import Watch from './src/Component/Watch';
import Movie from './src/Component/Movie';
import Login from './src/Component/Login';
import Toast from 'react-native-toast-message';
import Home from './src/Component/Home';
import {Colors} from './src/Constant/Styles';
import Search from './src/Component/Home/Search';

LogBox.ignoreLogs(['Warning...']);
LogBox.ignoreAllLogs();
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={Colors.colorPrimary}
        barStyle="light-content"
      />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="Start" component={Start} /> */}
        <Stack.Screen
          name="Movie"
          component={Movie}
          options={{animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="Watch"
          component={Watch}
          options={{animation: 'slide_from_right'}}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{animation: 'fade_from_bottom'}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{animation: 'slide_from_right'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
