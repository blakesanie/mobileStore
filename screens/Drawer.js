import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  SafeAreaView,
  Dimensions
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    paddingTop: 50,
    paddingBottom: 50,
    alignItems: "center"
  },
  title: {
    fontFamily: "normal",
    fontSize: 30,
    marginBottom: 30
  },
  row: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    flexWrap: "nowrap",
    paddingLeft: 30,
    alignItems: "center"
  },
  icon: {
    width: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  label: {
    paddingLeft: 30,
    fontFamily: "normal",
    fontSize: 18
  }
});

export default class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.content}>
          <Text style={styles.title}>App Name</Text>
          <DrawerItem
            category="Home"
            icon="ios-home"
            screen="Home"
            navigation={this.props.navigation}
          />
          <DrawerItem
            category="Accessories"
            icon="ios-watch"
            screen="Accessories"
            navigation={this.props.navigation}
          />
          <DrawerItem
            category="Smart Home"
            icon="ios-bulb"
            screen="SmartHome"
            navigation={this.props.navigation}
          />
          <DrawerItem
            category="Gadgets"
            icon="ios-magnet"
            screen="Gadgets"
            navigation={this.props.navigation}
          />
          <DrawerItem
            category="Music"
            icon="ios-musical-notes"
            screen="Music"
            navigation={this.props.navigation}
          />
          <DrawerItem
            category="Gaming"
            icon="logo-game-controller-a"
            screen="Gaming"
            navigation={this.props.navigation}
          />
          <DrawerItem
            category="Mobile"
            icon="md-phone-portrait"
            screen="Mobile"
            navigation={this.props.navigation}
          />
          <DrawerItem
            category="Photo / Video"
            icon="ios-camera"
            screen="PhotoVideo"
            navigation={this.props.navigation}
          />
          <DrawerItem
            category="Computing"
            icon="ios-laptop"
            screen="Computing"
            navigation={this.props.navigation}
          />
          <DrawerItem
            category="Gifts"
            icon="ios-gift"
            screen="Gifts"
            navigation={this.props.navigation}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

class DrawerItem extends React.Component {
  navigateToCategory(category) {
    this.props.navigation.navigate(this.props.screen);
    this.props.navigation.closeDrawer();
  }

  render() {
    var style = [styles.row];
    if (this.props.category == "Home") style.push({ marginBottom: 15 });
    return (
      <TouchableOpacity
        style={style}
        onPress={() => {
          this.navigateToCategory(this.props.category);
        }}
      >
        <View style={styles.icon}>
          <Ionicons name={this.props.icon} size={30} color="#000" />
        </View>
        <Text style={styles.label}>{this.props.category}</Text>
      </TouchableOpacity>
    );
  }
}
