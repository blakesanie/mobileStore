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
  Dimensions,
  WebView
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  }
});

export default class WebModal extends React.Component {
  render() {
    var uri = this.props.navigation.getParam("uri", "fail");
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Button
            title="back"
            onPress={() => {
              this.props.navigation.goBack();
            }}
          />
        </View>
        <WebView
          style={{
            width: 400,
            height: 400
          }}
          source={{ uri: uri }}
        />
      </SafeAreaView>
    );
  }
}
