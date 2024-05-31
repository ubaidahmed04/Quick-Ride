import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../Components/Card';
import BottomCard from '../Components/BottomCard';
import LandingPage from '../Components/LandingPage';

const IndexScreen = () => {
  return (
    
    <View >
      <LandingPage/>
      {/* <Card/>
      <BottomCard/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default IndexScreen;
