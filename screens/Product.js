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
    height: "100%",
    aspectRatio: 1,
    borderRadius: 10
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

  _navigateToMore() {
    this.props.navigation.navigate("More", {
      title: this.props.title,
      price: this.props.price,
      //placeholder for now
      amazonUrl:
        "https://www.amazon.com/GoPro-HERO7-Black-Waterproof-Streaming-Stabilization/dp/B07GDGZCCH"
    });
  }

  _navigateToCat() {
    this.props.navigation.navigate("Browse", {
      title: this.props.title
    });
  }

  render() {
    var pointerEvents = "none";
    if (this.state.coverHidden == false) {
      pointerEvents = "auto";
    }
    var source = this.props.source || { uri: this.props.uri };
    var price = null;
    if (this.props.price) {
      price = (
        <Text style={[styles.text, styles.price]}>
          {"$" + this.props.price + "+"}
        </Text>
      );
    }
    var resizeMode = "contain";
    if (this.props.type == "cat") {
      resizeMode = "cover";
    }
    return (
      <View style={styles.container}>
        <View style={styles.whiteCover}>
          <Image style={styles.image} source={source} resizeMode={resizeMode} />
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
          {price}
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
              if (this.props.type == "cat") {
                this._navigateToCat();
              } else {
                this._navigateToMore();
              }
            }}
          >
            <Text style={[styles.buttonLabel]}>View</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }
}
