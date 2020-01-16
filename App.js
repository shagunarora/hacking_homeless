import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

export default class App1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>You are in hacking homeless chamber</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
