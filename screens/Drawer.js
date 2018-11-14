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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default class HomeScreen extends React.Component {
  _navigateToCategory(category) {
    this.props.navigation.navigate("Home", {
      title: category
    });
    setTimeout(() => {
      this.props.navigation.closeDrawer();
    }, 1);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Button
          title="Home"
          onPress={() => {
            this._navigateToCategory("Home");
          }}
        />
        <Button
          title="Gadgets"
          onPress={() => {
            this._navigateToCategory("Gadgets");
          }}
        />
        <Button
          title="Smart Home"
          onPress={() => {
            this._navigateToCategory("Smart Home");
          }}
        />
        <Button
          title="Wearable Tech"
          onPress={() => {
            this._navigateToCategory("Wearable Tech");
          }}
        />
        <Button
          title="Utilities"
          onPress={() => {
            this._navigateToCategory("Utilities");
          }}
        />
      </SafeAreaView>
    );
  }
}
