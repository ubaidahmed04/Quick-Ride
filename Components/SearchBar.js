import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import {  Ionicons, Entypo } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.inputDiv}>
      {/* <Text> Map page</Text> */}
      <View>
        <TextInput
          placeholder="Current Location"
          placeholderTextColor="#7F9DF1"
          style={styles.input}
        />
      </View>
      <View>
        <TextInput
          placeholder="Where to?"
          placeholderTextColor="#7F9DF1"
          style={styles.input}
        />
      </View>
      <View>
        <View style={styles.card1}>
          <View style={{ marginTop: 18 }}>
            <Entypo name="dribbble-with-circle" size={35} color="#c3c3c3" />
          </View>
          <View>
            <Text style={styles.bold}>Work</Text>
            <Text style={styles.light}>1024,Market Street</Text>
          </View>
        </View>
        <View style={styles.card2}>
          <View style={{ marginTop: 18 }}>
            <Ionicons name="timer" size={40} color="#c3c3c3" />
          </View>
          <View>
            <Text style={styles.bold}>burnsRoad Street</Text>
            <Text style={styles.light}>Karachi</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  inputDiv: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#FFFFFF",
  },
  input: {
    borderWidth: 1,
    width: 320,
    height: 60,
    borderRadius: 9,
    backgroundColor: "#F5F5F5",
    padding: 9,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#AEAEAE",
    // marginBottom:16,
    marginLeft: 10,
  },
  card1: {
    width: 372,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
    height: 70,
    borderBottomColor: "#c3c3c3",
    borderBottomWidth: 0.5,
    backgroundColor: "#F6F6F6",
  },
  card2: {
    width: "372",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
    height: 70,
    borderBottomColor: "#c3c3c3",
    borderBottomWidth: 0.5,
    backgroundColor: "#F6F6F6",
  },
  bold: {
    fontSize: 19,
    fontWeight: "bold",
    marginTop: 9,
  },
  light: {
    fontSize: 12,
    color: "#AEAEAE",
  },
});
export default SearchBar;
