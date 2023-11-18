import React from "react";
import { View, StyleSheet } from "react-native";
import BrowseScreen from "../BrowseScreen";
import HeaderLeft from "../HeaderLeft";

const styles = StyleSheet.create({});

export default class Gadgets extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Gadgets",
      headerLeft: <HeaderLeft navigation={navigation} />,
      headerBackTitle: null
    };
  };
  render() {
    return (
      <BrowseScreen category="gadgets" navigation={this.props.navigation} />
    );
  }
}
