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
  Dimensions
} from "react-native";

const styles = StyleSheet.create({
  carousel: {
    width: "100%",
    overflow: "visible"
  },
  innerCarousel: {
    flexDirection: "row",
    flexWrap: "nowrap",
    paddingLeft: 20,
    paddingRight: 40
  },
  carouselItem: {
    marginLeft: 20
  },
  imageContainer: {
    width: "100%",
    borderRadius: 20,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
    padding: 10
  },
  rounded: {
    flex: 1,
    borderRadius: 15,
    overflow: "hidden",
  }
});

export default class Carousel extends React.Component {
  renderContainers() {
    var i = -1; //starts at 0 on first iteration
    return this.props.data.map(item => {
      i++;
      return (
        <View
          key={i}
          style={[
            styles.carouselItem,
            { width: this.props.carouselInterval - 20 }
          ]}
        >
          <View key={i} style={styles.imageContainer}>
            <View key={i} style={styles.rounded}>
              {this.props.render(i)}
            </View>
          </View>
        </View>
      );
    });
  }

  render() {
    return (
      <ScrollView
        horizontal
        snapToInterval={this.props.carouselInterval}
        snapToAlignment="start"
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        style={styles.carousel}
        contentContainerStyle={styles.innerCarousel}
      >
        {this.renderContainers()}
      </ScrollView>
    );
  }
}
