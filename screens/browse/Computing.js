import React from "react";
import { View, StyleSheet } from "react-native";
import BrowseScreen from "../BrowseScreen";
import HeaderLeft from "../HeaderLeft";

const styles = StyleSheet.create({});

export default class Computing extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Computing",
      headerLeft: <HeaderLeft navigation={navigation} />,
      headerBackTitle: null
    };
  };
  render() {
    return (
      <BrowseScreen category="computing" navigation={this.props.navigation} />
    );
  }
}
