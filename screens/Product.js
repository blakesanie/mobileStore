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
  Dimensions,
  Animated
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
    opacity: 1, //.9
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
    backgroundColor: "rgba(0,0,0,0.8)", //.8
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
    fontSize: 22,
    fontFamily: "light"
  },
  price: {
    fontSize: 16,
    fontFamily: "light",
    marginTop: 5
  },
  button: {
    width: 80,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: 20
  },
  buttonLabel: {
    fontSize: 20,
    fontFamily: "light"
  }
});

export default class Product extends React.Component {
  state = {
    coverOpacity: new Animated.Value(0),
    coverHidden: true
  };

  _timer = null;

  _fadeIn() {
    this.setState({
      coverHidden: false
    });
    this._fadeTimer = setTimeout(() => {
      this._fadeOut();
    }, 5000);
    Animated.timing(this.state.coverOpacity, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true // <-- Add this
    }).start();
  }

  _fadeOut() {
    this._fadeTimer = null;
    this.setState({
      coverHidden: true
    });
    Animated.timing(this.state.coverOpacity, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true
    }).start();
  }

  _toggleVisibility() {
    if (this.state.coverHidden == true) {
      /*this._timer = setTimeout(() => {
        this._toggleVisibility();
    }, 10000);*/
      this._fadeIn();
    } else {
      /*clearInterval(this._timer);
      this._timer = null;*/
      this._fadeOut();
    }
  }

  render() {
    var pointerEvents = "none";
    if (this.state.coverHidden == false) {
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
        <Animated.View
          pointerEvents={pointerEvents}
          style={[
            styles.cover,
            {
              opacity: this.state.coverOpacity._value,
              opacity: this.state.coverOpacity.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1]
              })
            }
          ]}
        >
          <Text style={[styles.text, styles.title]}>{this.props.title}</Text>
          <Text style={[styles.text, styles.price]}>
            {"$" + this.props.price + "+"}
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
              this.props.navigation.navigate("More", {
                title: this.props.title,
                price: this.props.price,
                //placeholder for now
                amazonUrl:
                  "https://www.amazon.com/GoPro-HERO7-Black-Waterproof-Streaming-Stabilization/dp/B07GDGZCCH"
              });
            }}
          >
            <Text style={[styles.buttonLabel]}>View</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }
}
