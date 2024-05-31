import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
    <Tab.Screen name="SettingScreen" component={SettingsScreen} options={{ headerShown: false }} />
  </Tab.Navigator>
);

export default TabNavigator;
