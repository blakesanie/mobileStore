import React from "react";
import { Platform, Animated, Easing } from "react-native";
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
    Mobile: Mobile,
    Accessories: Accessories,
    Computing: Computing,
    Gaming: Gaming,
    SmartHome: SmartHome,
    Gadgets: Gadgets,
    Music: Music,
    PhotoVideo: PhotoVideo,
    Gifts: Gifts,
    More: MoreScreen
  },
  {
    initialRoute: "Home",
    headerMode: "screen",
    transitionConfig: () => ({
      transitionSpec: {
        duration: 400,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
        useNativeDriver: true
      },
      screenInterpolator: ({ position, scene }) => {
        const { index } = scene;

        const opacity = position.interpolate({
          inputRange: [index - 1, index],
          outputRange: [0, 1]
        });

        return { opacity };
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
  return {
    transitionSpec: {
      duration: 3000,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true
    },
    screenInterpolator: ({ position, scene }) => {
      const { index } = scene;

      const opacity = position.interpolate({
        inputRange: [index - 1, index],
        outputRange: [0, 1]
      });

      return { opacity };
    }
  };
};
