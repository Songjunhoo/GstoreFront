import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import CategoryScreen from '../screens/CategoryScreen';
import BasketScreen from '../screens/BasketScreen';
import InfoScreen from '../screens/InfoScreen';

const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#000000',
        tabBarActiveBackgroundColor: '#e5e5e5',
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '홈',
          tabBarIcon: ({size}) => <Icon name="home" size={size} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: '검색',
          tabBarIcon: ({size}) => <Icon name="visibility" size={size} />,
        }}
      />
      <Tab.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          title: '카테고리',
          tabBarIcon: ({size}) => <Icon name="stream" size={size} />,
        }}
      />
      <Tab.Screen
        name="Basket"
        component={BasketScreen}
        options={{
          title: '장바구니',
          tabBarIcon: ({size}) => <Icon name="shopping-cart" size={size} />,
        }}
      />
      <Tab.Screen
        name="Info"
        component={InfoScreen}
        options={{
          title: '마이페이지',
          tabBarIcon: ({size}) => <Icon name="person" size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigation;
