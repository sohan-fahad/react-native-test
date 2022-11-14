import { useEffect, useState } from "react";
import {
  Button,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const ListScreen = (props) => {
  const unis = ["UNI1", "UNI2", "UNI3", "Uu0", "uuu", "ss", "sshj", "ss"];

  return (
    <View style={style.container}>
      <SafeAreaView style={style.viewStyle}>
        {/* {unis.map((uni, index) => (
        <Text style={style.textStyle} key={index}>
          {uni}
        </Text>
      ))} */}
        <FlatList
          data={unis}
          renderItem={({ item }) => <Text style={style.textStyle}>{item}</Text>}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
      <Button title="List" onPress={() => props.navigation.navigate("Home")} />
      <Image source={require("../../assets/favicon.png")} />
      <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
        <Image source={{ uri: "https://picsum.photos/200/300", height: 300 }} />
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  textStyle: {
    color: "red",
    fontSize: 30,
    marginVertical: 5,
    flex: 1,
  },
  viewStyle: {
    borderColor: "blue",
    borderWidth: 5,
    padding: 10,
    height: "auto",
  },
  container: {
    flex: 1,
  },
});

export default ListScreen;
