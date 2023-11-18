import React from "react";
import { View, StyleSheet } from "react-native";
import BrowseScreen from "../BrowseScreen";
import HeaderLeft from "../HeaderLeft";

const styles = StyleSheet.create({});

export default class SmartHome extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Smart Home",
      headerLeft: <HeaderLeft navigation={navigation} />,
      headerBackTitle: null
    };
  };
  render() {
    return (
      <BrowseScreen category="smarthome" navigation={this.props.navigation} />
    );
  }
}
