import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import BrowseScreen from "../screens/BrowseScreen";
import MoreScreen from "../screens/MoreScreen";
import Mobile from "../screens/browse/Mobile";
import Accessories from "../screens/browse/Accessories";
import Computing from "../screens/browse/Computing";
import Gaming from "../screens/browse/Gaming";
import SmartHome from "../screens/browse/SmartHome";
import Gadgets from "../screens/browse/Gadgets";
import Music from "../screens/browse/Music";
import PhotoVideo from "../screens/browse/PhotoVideo";
import Gifts from "../screens/browse/Gifts";
import { Font } from "expo";

export default createStackNavigator(
  {
    Home: HomeScreen,
    Browse: Mobile,
    More: MoreScreen
  },
  {
    initialRoute: "Home",
    transitionConfig: () => ({
      screenInterpolator: props => {
        return fade(props);
      }
    }),
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

const fade = props => {
  const { position, scene } = props;

  const index = scene.index;

  const translateX = 0;
  const translateY = 0;

  const opacity = position.interpolate({
    inputRange: [index - 0.7, index, index + 0.7],
    outputRange: [0.3, 1, 0.3]
  });

  return {
    opacity,
    transform: [{ translateX }, { translateY }]
  };
};
