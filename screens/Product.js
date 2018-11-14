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
  Dimensions
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 0, //20,\
    backgroundColor: "black"
  },
  whiteCover: {
    flex: 1,
    backgroundColor: "white",
    opacity: 0.9,
    padding: 10
  },
  image: {
    width: "100%",
    aspectRatio: 1
  },
  cover: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.8)",
    justifyContent: "center",
    alignItems: "center"
  },
  touchable: {
    position: "absolute",
    height: "100%",
    width: "100%",
    opacity: 0
  },
  text: {
    color: "white"
  },
  title: {
    fontSize: 20
  },
  price: {
    fontSize: 14
  },
  button: {
    width: 60,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: 20
  },
  buttonLabel: {
    fontSize: 20
  }
});

export default class Product extends React.Component {
  state = {
    coverOpacity: 0
  };

  _timer = null;

  _fadeIn() {
    Animated.timing(this.state.coverOpacity, {
      toValue: 1,
      duration: 500
    }).start();
  }

  _fadeOut() {
    Animated.timing(this.state.coverOpacity, {
      toValue: 1,
      duration: 500
    }).start();
  }

  _toggleVisibility() {
    if (this.state.coverOpacity == 0) {
      this._timer = setTimeout(() => {
        this._toggleVisibility();
      }, 10000);
      this.setState({
        coverOpacity: 1
      });
      console.log("yes");
    } else {
      clearInterval(this._timer);
      this._timer = null;
      this.setState({
        coverOpacity: 0
      });
      console.log("no");
    }
  }

  render() {
    var pointerEvents = "none";
    if (this.state.coverOpacity > 0) {
      pointerEvents = "auto";
    }
    return (
      <View style={styles.container}>
        <View style={styles.whiteCover}>
          <Image
            style={styles.image}
            source={{
              uri: this.props.uri
            }}
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => {
            this._toggleVisibility();
            this.props.onPress();
          }}
        />
        <View
          pointerEvents={pointerEvents}
          style={[styles.cover, { opacity: this.state.coverOpacity }]}
        >
          <Text style={[styles.text, styles.title]}>{this.props.title}</Text>
          <Text style={[styles.text, styles.price]}>
            {"$" + this.props.price}
          </Text>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => {
              this._toggleVisibility();
            }}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this._timer = setTimeout(() => {
                this._toggleVisibility();
              }, 10000);
              console.log("buy");
            }}
          >
            <Text style={[styles.buttonLabel]}>Buy</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
