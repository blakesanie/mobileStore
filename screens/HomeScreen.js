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
  Dimensions
} from "react-native";
import Product from "./Product";
import HeaderLeft from "./HeaderLeft";
import GridView from "react-native-super-grid";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "white"
  },
  gridView: {
    flex: 1,
    width: "100%",
    paddingTop: 50
  },
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 0,
    overflow: "hidden"
    //backgroundColor: '#eee'
    /*shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    backgroundColor: 'white',
    shadowOpacity: 0.1,
    shadowRadius: 3*/
    //height: 150
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
  }
});

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title", "Default Title"),
      headerLeft: <HeaderLeft navigation={navigation} />,
      headerStyle: {}
    };
  };

  state = {
    portraitOrientation: this._isPortraitOrientation(),
    selectedItem: ""
  };

  _isPortraitOrientation() {
    var window = Dimensions.get("window");
    return window.height > window.width;
  }

  _setOrientation() {
    this.setState({
      portraitOrientation: this._isPortraitOrientation()
    });
  }

  render() {
    var safePadding = {};
    if (!this.state.portraitOrientation) {
      safePadding = {
        paddingLeft: Expo.Constants.statusBarHeight,
        paddingRight: Expo.Constants.statusBarHeight
      };
    }

    const items = [
      {
        name: "Gopro Hero 7",
        price: 300,
        uri:
          "https://d1hbm078fhnj3b.cloudfront.net/product.php?image_id=104310&w=760&h=570"
      },
      {
        name: "iPhone XR",
        price: 650,
        uri:
          "https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/xr/iphone-xr-select-201809?wid=379&hei=330&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1536615930003"
      },
      {
        name: "Canon EOS R",
        price: 3000,
        uri:
          "https://www.galaxyandorra.es/9165-large_default/canon-eos-r-rf-24-1054-adapt-ef-rf-garantia-espanola.jpg"
      },
      {
        name: "Boosted Mini S",
        price: 600,
        uri:
          "https://awesomestufftobuy.com/wp-content/uploads/2018/04/boosted-board-mini-s-electric-skateboard.jpg"
      },
      {
        name: "JBL Flip 3",
        price: 120,
        uri:
          "http://brazilcenterusa.com/wp-content/uploads/2017/10/10659802.jpg"
      },
      {
        name: "Powerbeats 2",
        price: 200,
        uri:
          "https://www.itechdeals.com/media/catalog/product/cache/1/image/650x650/9df78eab33525d08d6e5fb8d27136e95/6/1/61kodjdptyl._sl1500__5.jpg"
      },
      {
        name: "Macbook Pro",
        price: 1600,
        uri:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9VREnksZ1la5YiEd97rk2g92z_wl7YGtZ31wFICToL_urWUPv"
      },
      {
        name: "Ledger Wallet",
        price: 200,
        uri:
          "https://cdn.shopify.com/s/files/1/2974/4858/products/nano-s-8_3x_grande_952f20b0-29bc-42b8-bcd5-1645ea2c4f18_767x.png?v=1532074689"
      }
    ];
    return (
      <View
        style={[styles.container, safePadding]}
        onLayout={this._setOrientation.bind(this)}
      >
        <GridView
          itemDimension={170}
          items={items}
          style={styles.gridView}
          spacing={5}
          renderItem={item => (
            <View style={[styles.itemContainer]}>
              <Product
                uri={item.uri}
                title={item.name}
                price={item.price}
                onPress={() => {
                  console.log(item.name);
                }}
              />
            </View>
          )}
        />
      </View>
    );
  }
}

/*<Button
  title="go to drawer"
  onPress={() => {
    this.props.navigation.openDrawer();
  }}
/>
<Text>{this.props.navigation.getParam("title", "nothing passed")}</Text>
<Button
  title="go to more"
  onPress={() => {
    this.props.navigation.navigate("More");
  }}
/>*/