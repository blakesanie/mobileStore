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
import Product from "./Product";
import GridView from "react-native-super-grid";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  innerContainer: {
    paddingBottom: 50
  },
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
    fontSize: 32,
    fontFamily: "normal",
    color: "black",
    paddingLeft: 50,
    paddingRight: 50,
    textAlign: "center",
    lineHeight: 50
  },
  headerLeft: {
    maxWidth: 60,
    maxHeight: 40
  },
  label: {
    textAlign: "center",
    fontSize: 24,
    fontFamily: "light",
    lineHeight: 100
  },
  gridView: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5
  },
  product: {
    borderRadius: 20,
    overflow: "hidden"
  },
  itemName: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600"
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: "#fff"
  },
  safeArea: {
    position: "absolute"
  },
  gifts: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center"
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
  i = 0;
  render() {
    console.log(this.i);
    this.i++;
    const categories = [
      {
        name: "Photo / Video",
        source: require("../assets/photoVideo.jpg"),
        screen: "PhotoVideo"
      },
      {
        name: "Gadgets",
        source: require("../assets/gadgets.jpg"),
        screen: "Gadgets"
      },
      {
        name: "Accessories",
        source: require("../assets/wearableTech.jpg"),
        screen: "Accessories"
      },
      {
        name: "Mobile",
        source: require("../assets/mobile.jpg"),
        screen: "Mobile"
      },
      {
        name: "Smart Home",
        source: require("../assets/smartHome.jpg"),
        screen: "SmartHome"
      },
      {
        name: "Music",
        source: require("../assets/music.jpg"),
        screen: "Music"
      },
      {
        name: "Gaming",
        source: require("../assets/gaming.jpg"),
        screen: "Gaming"
      },
      {
        name: "Computing",
        source: require("../assets/computing.jpg"),
        screen: "Computing"
      }
    ];
    var coverHeight = Math.max(Dimensions.get("window").height - 300, 400);
    var coverStyles = {
      height: coverHeight
    };
    if (this.state.scrollPos < coverHeight) {
      coverStyles = {
        height: coverHeight - 1 * this.state.scrollPos,
        marginTop: this.state.scrollPos
      };
    }
    var headerLeft = null;
    if (this.state.scrollPos < coverHeight) {
      headerLeft = (
        <HeaderLeft
          navigation={this.props.navigation}
          style={{ opacity: 0.3 }}
        />
      );
    }
    return (
      <View style={{ flex: 1 }}>
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
              source={require("../assets/macbook2.jpg")}
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
          <Text style={styles.label}>Browse Categories</Text>
          <GridView
            itemDimension={Dimensions.get("window").width / 3}
            items={categories}
            style={styles.gridView}
            spacing={10}
            renderItem={cat => (
              <View style={[styles.itemContainer]}>
                <View style={styles.product}>
                  <Product
                    source={cat.source}
                    title={cat.name}
                    type="cat"
                    screen={cat.screen}
                    navigation={this.props.navigation}
                    onPress={() => {
                      //console.log(item.name);
                    }}
                  />
                </View>
              </View>
            )}
          />
          <TouchableOpacity
            style={styles.gifts}
            onPress={() => {
              this.props.navigation.navigate("Gifts");
            }}
          >
            <Text style={styles.label}>Or shop </Text>
            <Text style={[styles.label, { fontFamily: "normal" }]}>Gifts</Text>
          </TouchableOpacity>
        </ScrollView>
        <SafeAreaView style={styles.safeArea}>{headerLeft}</SafeAreaView>
      </View>
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
