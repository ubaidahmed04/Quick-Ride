import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import IndexScreen from './App/IndexScreen';
import TabNavigator from './App/tabs/_layout';
import HomeScreen from './App/tabs/HomeScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerShown: true,
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{ paddingLeft: 20 ,paddingBottom:5}}>
          <Ionicons name="menu" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View 
        style={{
          paddingRight:20,
         paddingBottom:5,
         paddingTop:2,
         }}>
          <Text
         style={{
          color:"#FFFFFF",
          backgroundColor:"#79BD8B" ,
          padding:9,
          borderRadius:14,
          fontSize:16,
          textAlign:"center"
         }}
          >$5.00</Text>
          </View>

      ),
      headerTitle: '',
      headerStyle: {
        backgroundColor: '#55B26B',
        height:100,
      },
    }}
  >
    <Stack.Screen name="HomeScreen" component={IndexScreen} />
  </Stack.Navigator>
);

const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
    <Drawer.Screen name="Map" component={TabNavigator} />
  </Drawer.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Drawer">
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
