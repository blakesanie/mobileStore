import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import MoreScreen from "../screens/MoreScreen";

export default createStackNavigator(
  {
    Home: HomeScreen,
    More: MoreScreen
  },
  { initialRoute: 'Home' }
);
