import React from "react";
import { View, StyleSheet } from "react-native";
import BrowseScreen from "../BrowseScreen";
import HeaderLeft from "../HeaderLeft";

const styles = StyleSheet.create({});

export default class Mobile extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Mobile",
      headerLeft: <HeaderLeft navigation={navigation} />
    };
  };
  render() {
    return <BrowseScreen category="mobile" />;
  }
}
