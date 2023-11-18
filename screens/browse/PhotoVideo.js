import React from "react";
import { View, StyleSheet } from "react-native";
import BrowseScreen from "../BrowseScreen";
import HeaderLeft from "../HeaderLeft";

const styles = StyleSheet.create({});

export default class PhotoVideo extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Photo / Video",
      headerLeft: <HeaderLeft navigation={navigation} />,
      headerBackTitle: null
    };
  };
  render() {
    return (
      <BrowseScreen category="photovideo" navigation={this.props.navigation} />
    );
  }
}
