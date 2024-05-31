import React from 'react';
import { View, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <View style={{ flex: 1 }}>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Home',
            drawerIcon: ({ color,  }) => ( 
              <MaterialCommunityIcons name="home" size={40} color={color} />
            )
          }}
        />
      
      </Drawer>
    </GestureHandlerRootView>
  </View>
  );
}
