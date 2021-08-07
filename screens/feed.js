import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TouchableOpacityBase } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";


export default class Feed extends Component {
  render() {
    return (
      <View style={styles.container}>
           
        <Text>Feed</Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});