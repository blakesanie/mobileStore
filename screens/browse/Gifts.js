import React from "react";
import { View, StyleSheet } from "react-native";
import BrowseScreen from "../BrowseScreen";
import HeaderLeft from "../HeaderLeft";

const styles = StyleSheet.create({});

export default class Gifts extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Gifts",
      headerLeft: <HeaderLeft navigation={navigation} />
    };
  };
  render() {
    return <BrowseScreen category="gifts" />;
  }
}
