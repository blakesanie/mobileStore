import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import HomeStack from "./StackNav";
import WebModal from "../Modals/WebModal";
import { Font } from "expo";

export default createStackNavigator(
  {
    Home: HomeStack,
    Web: WebModal
  },
  {
    initialRoute: "Home",
    mode: "modal",
    navigationOptions: {
      header: null
    }
  }
);
