import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import MoreScreen from "../screens/MoreScreen";
import { Font } from "expo";

export default createStackNavigator(
  {
    Home: HomeScreen,
    More: MoreScreen
  },
  {
    initialRoute: "Home",
    navigationOptions: () => {
      return {
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
          height: 60
        },
        headerTitleStyle: {
          fontFamily: "normal",
          fontSize: 24
        }
      };
    }
  }
);
