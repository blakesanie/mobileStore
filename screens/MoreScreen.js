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
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  content: {
    alignItems: "center"
  },
  carousel: {
    width: "100%",
    maxHeight: 250,
    overflow: "visible"
  },
  innerCarousel: {
    flexDirection: "row",
    flexWrap: "nowrap",
    paddingLeft: 20,
    paddingRight: 20
  },
  carouselItem: {
    height: "100%",
    marginLeft: 20
  },
  imageContainer: {
    height: "100%",
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
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 16,
    overflow: "hidden"
  },
  label: {
    fontSize: 24,
    fontFamily: "normal",
    margin: 30
  }
});

export default class MoreScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title", "Default Title")
    };
  };

  state = {
    images: [
      "https://d1hbm078fhnj3b.cloudfront.net/product.php?image_id=104310&w=760&h=570",
      "https://s23527.pcdn.co/wp-content/uploads/2018/09/gopro-hero-7-black-1.jpg.optimal.jpg",
      "https://cnet4.cbsistatic.com/img/1NcFMExN6qPJPNL2VkRT2i7qxOo=/970x0/2017/09/29/454c53d5-d0be-4c07-938c-6b130f4bb66f/gopro-hero-6-black-01.jpg",
      "https://ksassets.timeincuk.net/wp/uploads/sites/54/2018/09/GPH7-19-1024x683.jpg"
    ]
  };

  render() {
      var carouselInterval = Dimensions.get("window").width - 60;
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.label}>Images</Text>
        <ScrollView
          horizontal
          snapToInterval={carouselInterval}
          snapToAlignment="start"
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          style={styles.carousel}
          contentContainerStyle={styles.innerCarousel}
        >
          {this.state.images.map(uri => {
            console.log(uri);
            return (
              <View
                style={[
                  styles.carouselItem,
                  { width: carouselInterval - 20 }
                ]}
                key={uri}
              >
                <View style={styles.imageContainer} key={uri}>
                  <Image key={uri} style={styles.image} source={{ uri: uri }} />
                </View>
              </View>
            );
          })}
        </ScrollView>
        <Button
          title="go to drawer"
          onPress={() => {
            this.props.navigation.openDrawer();
          }}
        />
        <Text>{this.props.navigation.getParam("title", "nothing passed")}</Text>
      </ScrollView>
    );
  }
}
