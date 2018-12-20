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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    width: 70,
    height: 40,
    backgroundColor: "#92FD9E",
    borderRadius: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 5
  },
  text: {
    fontFamily: "normal",
    fontSize: 20
  }
});

export default class HeaderRight extends React.Component {
  render() {
    console.log(this.props);
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          this.props.navigation.navigate("Web", {
            uri: this.props.amazonUrl
          });
        }}
      >
        <Text style={styles.text}>Buy</Text>
      </TouchableOpacity>
    );
  }
}
