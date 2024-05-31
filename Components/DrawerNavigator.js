import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import TabNavigator from './TabNavigator';
import CustomDrawerContent from './CustomDrawerContent'; // Path to your CustomDrawerContent
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Map"
        component={TabNavigator}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="map-outline" color={color} size={size} />
          ),
          headerTitle: "Location",
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
