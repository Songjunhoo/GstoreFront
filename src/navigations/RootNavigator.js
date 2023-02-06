import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainScreen from '../screens/MainScreen';
import SearchScreen from '../screens/SearchScreen';
import CategoryScreen from '../screens/CategoryScreen';
import BasketScreen from '../screens/BasketScreen';
import InfoScreen from '../screens/InfoScreen';
import HomeScreen from './../screens/HomeScreen';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  console.log('dddd');
  return (
    <Stack.Navigator
      initialRouteName="MainScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
      <Stack.Screen name="BasketScreen" component={BasketScreen} />
      <Stack.Screen name="InfoScreen" component={InfoScreen} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
