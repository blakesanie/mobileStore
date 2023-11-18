import React from "react";
import { View, StyleSheet } from "react-native";
import BrowseScreen from "../BrowseScreen";
import HeaderLeft from "../HeaderLeft";

const styles = StyleSheet.create({});

export default class Accessories extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Accessories",
      headerLeft: <HeaderLeft navigation={navigation} />,
      headerBackTitle: null,
      headerBackTitle: null
    };
  };
  render() {
    return (
      <BrowseScreen category="accessories" navigation={this.props.navigation} />
    );
  }
}
