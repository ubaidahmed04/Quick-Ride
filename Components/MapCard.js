import { View, Text, StyleSheet, SafeAreaView, TextInput, Button } from 'react-native'
import React from 'react'
import { FontAwesome6 ,MaterialIcons } from '@expo/vector-icons';
// import MapView from 'react-native-maps';

const Mapcard = () => {
  return (
    <>
      <View style={styles.mapContainer}>
        <View style={styles.mapLocation}>
        <Text> Map Container</Text>

        </View>
        <View style={styles.Map}>
        <SafeAreaView>
      <TextInput
        style={styles.input}
        
        placeholder='your location'
      />
      <TextInput
        style={styles.input}
        
        placeholder='Where to go'

      />
      </SafeAreaView>
      <Button title='use my location' />
        <View  style={styles.card1}>
            <View >
        <MaterialIcons name="group-work" size={25} color="#000" />
            </View>
        <View>
            <Text style={styles.bold}>Work</Text>
            <Text style={styles.light}>1024,Market Street</Text>
        </View>
        </View>
        <View  style={styles.card2}>
            <View style={{marginTop:18}}>
        <FontAwesome6 name="street-view" size={25} color="#000" />
            </View>
        <View>
            <Text style={styles.bold}>burnsRoad Street</Text>
            <Text style={styles.light}>Karachi</Text>
        </View>
        </View>
        </View>
        
      </View>
    </>
  )
}

const styles = StyleSheet.create({
    mapLocation:{
     display:"flex",
    backgroundColor:"#c3c3c3",
    tintColor:"#FFFFFF",
    height:300,
    // flex:0.5,
    
  },
  Map:{
    // flex:0.5,
    display:"flex",
    flexDirection:"column",

  },
  MapDrawer:{

  },
  mapView:{
      flex:0.5,
      backgroundColor:"red",
      marginTop:"30px",

  },
  mapModal:{
      flex:0.5,
      width: '100%',
      height: '100%',
      display:"flex",
      justifyContent:"center",
      padding:10,
      // margin:10,
      borderTopWidth: 1, 
      borderTopColor: 'transparent',
      shadowColorshadowColor: '#000', // Shadow color
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.3,
      shadowRadius: 10,
      elevation: 5, 
      // backgroundColor:"green"
  },
  input: {
      height: 50,
      width:370,
      margin: 12,
      borderWidth: 2,
      // padding: 10,
      // borderBlockColor:"#c3c3c3",
      borderRadius:10,
    },
    card1:{
      width:"100%",
      display:"flex",
      flexDirection:"row",
      // marginTop:50,
      alignItems:"center",
      gap:9,
      height:70,
      width:387,
      padding:10,
      borderBottomColor:"#c3c3c3",
      borderBottomWidth:.5,
      backgroundColor: '#F6F6F6',
    },
    card2:{
        width:387,
        padding:10,
        display:"flex",
        flexDirection:"row",
      //   alignItems:"center",
        gap:9,
        height:75,
        borderBottomColor:"#c3c3c3",
        borderBottomWidth:.5,
        backgroundColor: '#F6F6F6',
    },
    bold:{
        fontSize:23,
        fontWeight:"bold",
        marginTop:9,
    },
    light:{
        fontSize:12,
        color:"#D9D9D9"
    },
    title: {
      fontSize: 25,
      fontWeight: "bold",
      textAlign: "center",
      borderBlockColor: "#c3c3c3",
      borderBottomWidth: .5,
      paddingBottom: 10,
    },
})

export default Mapcard
