import React, { Component } from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { AppLoading, Asset, Font, Icon } from "expo";
import AppStack from "./navigation/DrawerNav";

export default class App extends Component {
  render() {
    Expo.ScreenOrientation.allowAsync(
      Expo.ScreenOrientation.Orientation.ALL_BUT_UPSIDE_DOWN
    );
    return <AppStack />;
  }
}
