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
import Carousel from "./Carousel";
import HeaderRight from "./HeaderRight";

const styles = StyleSheet.create({
  title: {
    fontFamily: "normal",
    fontSize: 18
  },
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  content: {
    alignItems: "center",
    paddingBottom: 40
  },
  image: {
    width: "100%",
    height: 200
  },
  label: {
    fontSize: 24,
    fontFamily: "light",
    margin: 30
  },
  video: {
    width: "100%",
    aspectRatio: 16 / 9
  },
  versionName: {
    fontFamily: "normal",
    fontSize: 24,
    textAlign: "center",
    margin: 10
  },
  price: {
    fontFamily: "light",
    textAlign: "center",
    marginBottom: 20,
    fontSize: 18
  },
  info: {
    lineHeight: 100,
    fontFamily: "normal",
    textAlign: "center",
    fontSize: 24
  }
});

export default class MoreScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerBackTitle: "blake",
      headerTitle: (
        <Text style={styles.title}>
          {navigation.getParam("title", "error")}
          <Text style={(styles.title, { fontFamily: "light" })}>
            {" | $" + navigation.getParam("price", "error") + "+"}
          </Text>
        </Text>
      ),
      headerRight: (
        <HeaderRight
          navigation={navigation}
          amazonUrl={navigation.getParam("amazonUrl", "error")}
        />
      )
    };
  };

  state = {
    images: [
      "https://d1hbm078fhnj3b.cloudfront.net/product.php?image_id=104310&w=760&h=570",
      "https://s23527.pcdn.co/wp-content/uploads/2018/09/gopro-hero-7-black-1.jpg.optimal.jpg",
      "https://cnet4.cbsistatic.com/img/1NcFMExN6qPJPNL2VkRT2i7qxOo=/970x0/2017/09/29/454c53d5-d0be-4c07-938c-6b130f4bb66f/gopro-hero-6-black-01.jpg",
      "https://ksassets.timeincuk.net/wp/uploads/sites/54/2018/09/GPH7-19-1024x683.jpg"
    ],
    videos: ["G9KDqfpCgws", "4EEiRtxU3aw", "Vb_9aatr2fw"],
    info: [
      {
        name: "Specs",
        url:
          "http://www.onsport.com.au/media/docs/GoPro-HERO7-Comparison-Specs-fad6dde9-3e44-4b26-adb8-fb43da4bccd0-0.pdf"
      },
      {
        name: "Review",
        url: "https://www.trustedreviews.com/reviews/gopro-hero-7-black"
      }
    ],
    versions: [
      {
        name: "GoPro Hero 7 Black",
        price: 395,
        imageUrl:
          "https://d1hbm078fhnj3b.cloudfront.net/product.php?image_id=104310&w=760&h=570",
        amazonUrl:
          "https://www.amazon.com/GoPro-HERO7-Black-Waterproof-Streaming-Stabilization/dp/B07GDGZCCH/ref=sr_1_3?s=electronics&ie=UTF8&qid=1542780237&sr=1-3&keywords=gopro+hero+7"
      },
      {
        name: "GoPro Hero 7 Silver",
        price: 230,
        imageUrl:
          "https://media.teds.com.au/media/catalog/product/cache/1/image/750x750/9df78eab33525d08d6e5fb8d27136e95/h/e/hero7silv2.jpg",
        amazonUrl:
          "https://www.amazon.com/GoPro-HERO7-Silver-Waterproof-Digital/dp/B07GDGZCCJ/ref=sr_1_5?s=electronics&ie=UTF8&qid=1542780237&sr=1-5&keywords=gopro+hero+7"
      },
      {
        name: "GoPro Hero 7 White",
        price: 180,
        imageUrl:
          "https://i2.wp.com/beebom.com/wp-content/uploads/2018/09/Hero7white_3.jpg?resize=640%2C498&ssl=1",
        amazonUrl:
          "https://www.amazon.com/GoPro-HERO7-White-Waterproof-Digital/dp/B07GDFTSPV/ref=sr_1_1_sspa?ie=UTF8&qid=1542782007&sr=8-1-spons&keywords=gopro+hero+7+white&psc=1"
      }
    ],
    carouselInterval: Dimensions.get("window").width - 60
  };

  renderImages(i) {
    var uri = this.state.images[i];
    return <Image key={i} style={styles.image} source={{ uri: uri }} />;
  }

  renderInfo(i) {
    var info = this.state.info[i];
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          this.props.navigation.navigate("Web", {
            uri: info.url
          });
        }}
      >
        <Text style={styles.info}>{info.name}</Text>
      </TouchableOpacity>
    );
  }

  renderVersions(i) {
    var version = this.state.versions[i];
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          this.props.navigation.navigate("Web", {
            uri: version.amazonUrl
          });
        }}
      >
        <Image
          key={i}
          style={styles.image}
          source={{ uri: version.imageUrl }}
          resizeMode={"contain"}
        />
        <Text style={styles.versionName}>{version.name}</Text>
        <Text style={styles.price}>{"$" + version.price}</Text>
      </TouchableOpacity>
    );
  }

  renderVideos(i) {
    var uri =
      "https://img.youtube.com/vi/" + this.state.videos[i] + "/hqdefault.jpg";
    return (
      <TouchableOpacity
        onPress={() => {
          this.openVideo(i);
        }}
        style={{ justifyContent: "center", alignItems: "center" }}
        activeOpacity={1}
      >
        <Image key={i} style={styles.video} source={{ uri: uri }} />
        <Image
          key={i + "*"}
          style={{ height: 70, width: 70, position: "absolute", opacity: 0.8 }}
          source={{
            uri:
              "http://www.smigiba.fr/wp-content/uploads/2018/05/youtube-variation.png"
          }}
        />
      </TouchableOpacity>
    );
  }

  openVideo(i) {
    var uri = "https://www.youtube.com/watch?v=" + this.state.videos[i];
    this.props.navigation.navigate("Web", {
      uri: uri
    });
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.label}>Images</Text>
        <Carousel
          render={this.renderImages.bind(this)}
          carouselInterval={this.state.carouselInterval}
          data={this.state.images}
        />
        <Text style={styles.label}>Videos</Text>
        <Carousel
          render={this.renderVideos.bind(this)}
          carouselInterval={this.state.carouselInterval}
          data={this.state.videos}
        />
        <Text style={styles.label}>Versions</Text>
        <Carousel
          render={this.renderVersions.bind(this)}
          carouselInterval={this.state.carouselInterval}
          data={this.state.versions}
        />
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
