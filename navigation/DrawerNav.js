import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Dimensions } from "react-native";
import { createDrawerNavigator } from "react-navigation";
import StackNav from './StackNav';
import Drawer from '../screens/Drawer';
import HomeScreen from '../screens/HomeScreen';

export default createDrawerNavigator(
  {
    Home: StackNav,
  },
  {
    contentComponent: Drawer,
  }
);
