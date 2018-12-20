import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import BrowseScreen from "../screens/BrowseScreen";
import MoreScreen from "../screens/MoreScreen";
import { Font } from "expo";

export default createStackNavigator(
  {
    Home: HomeScreen,
    Browse: BrowseScreen,
    More: MoreScreen
  },
  {
    initialRoute: "Home",
    navigationOptions: () => {
      return {
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0
        },
        headerTitleStyle: {
          fontFamily: "normal",
          fontSize: 20
        }
      };
    }
  }
);
