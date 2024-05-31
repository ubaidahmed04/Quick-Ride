import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingScreen';
import {FontAwesome5 ,Ionicons} from 'react-native-vector-icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Map" component={HomeScreen}
     options={{ headerShown: false ,
     tabBarIcon:({color,size})=>(
<FontAwesome5 name='map-marker-alt' size={size} color={color}/>
     )} }/>
    <Tab.Screen name="Settings" component={SettingsScreen} 
    options={{ headerShown: false ,
     tabBarIcon:({color,size})=>(
<Ionicons name='settings' size={size} color={color}/>
     )} } />
  </Tab.Navigator>
);

export default TabNavigator;
