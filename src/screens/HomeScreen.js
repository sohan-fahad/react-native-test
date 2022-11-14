import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={style.textStyle}>Hi there!</Text>
      <Button title="List" onPress={() => props.navigation.navigate("List")} />
    </View>
  );
};

const style = StyleSheet.create({
  textStyle: {
    color: "red",
    fontSize: 30,
  },
});

export default HomeScreen;
