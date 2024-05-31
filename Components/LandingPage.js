import { View, Text, StyleSheet, Button, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import BottomCard from './BottomCard';

const LandingPage = () => {
const carImg = require("../assets/coloraCar.png");
const FoodImg = require("../assets/Food.png");

  return (<>
    <View style={Styles.Header}>
      <Text style={Styles.headText}>
        Try local Favourate
      </Text>
      <Text style={Styles.titleText}>
        Local Resturant are open with delivering with Uber Eats
      </Text>
      <TouchableOpacity style={Styles.headerBtn} >
    <Text style={Styles.headerBtnText}>Order Now</Text>
  </TouchableOpacity>
    </View>
    <View style={Styles.ImageDiv}>
        <View style={{marginBottom:10,}}>
          <Image source={carImg} style={Styles.cardImage1} />   
          <Text style={{textAlign:"center",color:"#3B3737",fontWeight:"800",fontSize:20,bottom:45,}}>Ride</Text>  
        </View>
        <View >
          <Image source={FoodImg} style={Styles.cardImage1} /> 
          <Text style={{textAlign:"center",color:"#3B3737",fontWeight:"800",fontSize:20,bottom:30}}>Food</Text>  
        </View>
    </View>
    <ScrollView>

    <BottomCard/>
    </ScrollView>

    </>
  )
}
const Styles =StyleSheet.create({
    Header:{
        backgroundColor:"#55B26B"
    },
    headText:{
        fontSize:25,
        color:"#FFFFFF", 
        fontWeight:'bold',
        paddingLeft:10,
        margin:2,
        paddingTop:20,
    },
    titleText:{
        fontSize:15,
        color:"#FFFFFF", 
        fontWeight:'400',
        paddingLeft:12,
        width:260,
    },
    headerBtn: {
        backgroundColor: '#000000',
        paddingVertical: 10,
        marginTop:20,
        // paddingHorizontal: 10,
        borderRadius: 25,
        alignItems: 'center',
        width:190,
        marginLeft:25,
        marginBottom:40,
      },
      headerBtnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
      ImageDiv:{
        display: "flex",
        flexDirection: "row",
        justifyContent:"center",
        alignItems:"flex-start",
        borderRightWidth:2,
        borderRightColor:"#c3c3c3",
        bottom:40,
        gap:90,
        borderBottomWidth:6,
        borderBlockColor:"#c3c3c3",
    },
      cardImage1:{
        width:100,
        objectFit:"contain"
      }

})
export default LandingPage