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
  SafeAreaView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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
    width: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  label: {
    paddingLeft: 30,
    fontFamily: "normal",
    fontSize: 20
  }
});

export default class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>BitBite</Text>
        <DrawerItem
          category="Home"
          icon="ios-home"
          navigation={this.props.navigation}
        />
        <DrawerItem
          category="Wearable Tech"
          icon="ios-watch"
          navigation={this.props.navigation}
        />
        <DrawerItem
          category="Smart Home"
          icon="ios-bulb"
          navigation={this.props.navigation}
        />
        <DrawerItem
          category="Gadgets"
          icon="ios-magnet"
          navigation={this.props.navigation}
        />
        <DrawerItem
          category="Utilities"
          icon="md-calculator"
          navigation={this.props.navigation}
        />
        <DrawerItem
          category="Gaming"
          icon="logo-game-controller-a"
          navigation={this.props.navigation}
        />
        <DrawerItem
          category="Mobile"
          icon="md-phone-portrait"
          navigation={this.props.navigation}
        />
        <DrawerItem
          category="Photo / Video"
          icon="ios-camera"
          navigation={this.props.navigation}
        />
        <DrawerItem
          category="Gifts"
          icon="ios-gift"
          navigation={this.props.navigation}
        />
      </SafeAreaView>
    );
  }
}

class DrawerItem extends React.Component {
  navigateToCategory(category) {
    if (this.props.category == "Home") {
      this.props.navigation.navigate("Home", {
        title: category
      });
    } else {
      this.props.navigation.navigate("Browse", {
        title: category
      });
    }
    this.props.navigation.closeDrawer();
  }

  render() {
    var style = [styles.row];
    if (this.props.category == "Home") style.push({ marginBottom: 30 });
    return (
      <TouchableOpacity
        style={style}
        onPress={() => {
          this.navigateToCategory(this.props.category);
        }}
      >
        <View style={styles.icon}>
          <Ionicons name={this.props.icon} size={40} color="#000" />
        </View>
        <Text style={styles.label}>{this.props.category}</Text>
      </TouchableOpacity>
    );
  }
}
