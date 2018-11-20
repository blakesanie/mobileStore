import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  SafeAreaView,
  Dimensions
} from "react-native";
import Product from "./Product";
import GridView from "react-native-super-grid";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 20
  }
});

export default class HeaderLeft extends React.Component {
  render() {
    console.log(this.props);
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          this.props.navigation.openDrawer();
        }}
      >
        <Ionicons name="ios-list" size={32} color="#000" />
      </TouchableOpacity>
    );
  }
}

/*<Button
  title="go to drawer"
  onPress={() => {
    this.props.navigation.openDrawer();
  }}
/>
<Text>{this.props.navigation.getParam("title", "nothing passed")}</Text>
<Button
  title="go to more"
  onPress={() => {
    this.props.navigation.navigate("More");
  }}
/>*/
