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
  WebView,
  Dimensions,
  SafeAreaView
} from "react-native";
import HeaderLeft from "./HeaderLeft";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  innerContainer: {},
  cover: {},
  image: {
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  textWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 40,
    fontFamily: "normal",
    color: "black",
    paddingLeft: 50,
    paddingRight: 50,
    textAlign: "center",
    lineHeight: 60
  },
  headerLeft: {
    maxWidth: 60,
    maxHeight: 40
  },
  something: {
    padding: 20,
    textAlign: "center",
    fontSize: 24,
    fontFamily: "light",
    height: 900,
    backgroundColor: "white"
  }
});

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    };
  };

  state = {
    scrollPos: 0
  };

  render() {
    var coverHeight = Dimensions.get("window").height - 300;
    var coverStyles = {
      height: coverHeight
    };
    if (this.state.scrollPos < coverHeight) {
      coverStyles = {
        height: coverHeight - 1 * this.state.scrollPos,
        marginTop: this.state.scrollPos
      };
    }
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.innerContainer}
        scrollEventThrottle={16}
        onScroll={event => {
          var y = event.nativeEvent.contentOffset.y;
          this.setState({
            scrollPos: y
          });
        }}
      >
        <View style={[styles.cover, coverStyles]}>
          <Image
            style={styles.image}
            source={require("../assets/macbook.jpg")}
            resizeMode="cover"
          />
          <View
            style={[
              styles.textWrapper,
              { opacity: 1 - this.state.scrollPos / (coverHeight - 240) }
            ]}
          >
            <Text style={styles.text}>
              Hand picked products for the classiest of tech lovers
            </Text>
          </View>
        </View>
        <Text style={styles.something}>Browse Categories</Text>
      </ScrollView>
    );
  }
}

/*
<Text style={styles.label}>Info</Text>
<Carousel
  render={this.renderInfo.bind(this)}
  carouselInterval={this.state.carouselInterval}
  data={this.state.info}
/>
*/
