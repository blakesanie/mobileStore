import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default class MoreScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title", "Default Title")
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="go to drawer"
          onPress={() => {
            this.props.navigation.openDrawer();
          }}
        />
        <Text>{this.props.navigation.getParam("title", "nothing passed")}</Text>
      </View>
    );
  }
}
