import React from "react";
import { View, StyleSheet } from "react-native";
import BrowseScreen from "../BrowseScreen";
import HeaderLeft from "../HeaderLeft";

const styles = StyleSheet.create({});

export default class Gaming extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Gaming",
      headerLeft: <HeaderLeft navigation={navigation} />
    };
  };
  render() {
    return <BrowseScreen category="gaming" />;
  }
}
