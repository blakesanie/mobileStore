import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Dimensions } from "react-native";
import { createDrawerNavigator } from "react-navigation";
import ModalNav from "./ModalNav";
import Drawer from "../screens/Drawer";
import HomeScreen from "../screens/HomeScreen";

export default createDrawerNavigator(
  {
    Home: ModalNav
  },
  {
    contentComponent: Drawer,
    drawerWidth: 250
  }
);
