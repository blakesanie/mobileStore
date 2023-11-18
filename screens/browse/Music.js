import React from "react";
import { View, StyleSheet } from "react-native";
import BrowseScreen from "../BrowseScreen";
import HeaderLeft from "../HeaderLeft";

const styles = StyleSheet.create({});

export default class Music extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Music",
      headerLeft: <HeaderLeft navigation={navigation} />,
      headerBackTitle: null
    };
  };
  render() {
    return <BrowseScreen category="music" navigation={this.props.navigation} />;
  }
}
