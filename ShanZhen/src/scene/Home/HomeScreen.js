/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Button,
  FlatList
} from "react-native";
import { createStackNavigator } from "react-navigation";

var Dimensions = require("Dimensions");
var screenWidth = Dimensions.get("window").width;
const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class HomeScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
    this.goodsList = [{ key: "1" }, { key: "2" }, { key: "3" }, { key: "4" }];
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.header}>善诊</Text>
          <View style={styles.banner}>
            <Image
              source={{ uri: "https://facebook.github.io/react/logo-og.png" }}
              style={
                { width: 335, height: 115 } // source={require("./image/btn_home_normal.png")}
              }
            />
          </View>
          <View style={styles.tips}>
            <View style={styles.tip}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Goods")}
              >
                <Image
                  source={{
                    uri: "https://facebook.github.io/react/logo-og.png"
                  }}
                  style={{ width: 58, height: 58 }}
                />
              </TouchableOpacity>
              <Text style={styles.instructions}>体检</Text>
            </View>
            <View style={styles.tip}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Ask")}
              >
                <Image
                  source={{
                    uri: "https://facebook.github.io/react/logo-og.png"
                  }}
                  style={{ width: 58, height: 58 }}
                />
              </TouchableOpacity>
              <Text style={styles.instructions}>快速问诊</Text>
            </View>
            <View style={styles.tip}>
              <TouchableOpacity
                onPress={
                  () => this.props.navigation.navigate("GoodsDetail")
                  // const {navigation, theme, selectedTab} = this.props;
                  // const resetAction = StackActions.reset({
                  //   index: 0,
                  //   actions: [
                  //     NavigtionActions.navigate({
                  //       routeName: "GoodsDetail",
                  //     })
                  //   ]
                  // })
                  // navigation.dispatch(resetAction)
                }
              >
                <Image
                  source={{
                    uri: "https://facebook.github.io/react/logo-og.png"
                  }}
                  style={{ width: 58, height: 58 }}
                />
              </TouchableOpacity>
              <Text style={styles.instructions}>查报告</Text>
            </View>
          </View>
          <View style={styles.vip} onPress={() => alert("This is a button!")}>
            <Image
              source={{ uri: "https://facebook.github.io/react/logo-og.png" }}
              style={{ width: 16, height: 16 }}
            />
            <Text style={styles.vip1}>善诊会员</Text>
            <Text style={styles.vip2}>加入会员 立得免费体检</Text>
            <Image
              source={{ uri: "https://facebook.github.io/react/logo-og.png" }}
              style={{ width: 13, height: 13, marginLeft: 25 }}
            />
          </View>
          <View style={styles.goods}>
            <Text style={styles.header}>体检套餐</Text>
            <TouchableOpacity
              style={{ marginLeft: "auto" }}
              onPress={() => this.props.navigation.navigate("Goods")}
            >
              <Text
                style={{
                  color: "#A1A8AE",
                  fontSize: 13,
                  margin: 25,
                  marginLeft: "auto"
                }}
              >
                更多
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={this.goodsList}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("GoodsDetail")}
              >
                <View style={styles.item}>
                  <Image
                    source={{
                      uri: "https://facebook.github.io/react/logo-og.png"
                    }}
                    style={{ width: 130, height: 110 }}
                  />
                  <View style={styles.info}>
                    <Text style={styles.title}>关爱父母孝心体检</Text>
                    <Text style={styles.subtitle}>中老年基础体检筛查</Text>
                    <View style={styles.price}>
                      <Text style={styles.price1}>原价 235元</Text>
                      <Image
                        source={{
                          uri: "https://facebook.github.io/react/logo-og.png"
                        }}
                        style={{ width: 18, height: 18 }}
                      />
                      <Text style={styles.price2}>会员价 0元</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </ScrollView>
      </View>
    );
  }
}

// const AppStackNavigator = createStackNavigator(
//   {
//     Home: HomeScene,
//     Goods: GoodsScene,
//     Ask: AskScene,
//     Account: AccountScene
//   },
//   {
//     initialRouteName: "Home"
//   }
// );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  contentContainer: {
    paddingTop: 30,
    paddingBottom: 20
  },
  header: {
    fontSize: 22,
    color: "#272B45",
    textAlign: "left",
    margin: 20
  },
  banner: {
    height: 115,
    marginLeft: 20,
    marginRight: 20
  },
  tips: {
    display: "flex",
    flexDirection: "row",
    margin: 20,
    textAlign: "center"
  },
  tip: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    height: 120
  },
  instructions: {
    textAlign: "left",
    fontSize: 16,
    color: "#272B45",
    margin: 20
  },
  vip: {
    display: "flex",
    flexDirection: "row",
    margin: 20,
    height: 50,
    borderWidth: 1,
    borderColor: "#ECECEC",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },
  vip1: {
    marginLeft: 10,
    color: "#BBA06D",
    fontSize: 16
  },
  vip2: {
    marginLeft: 20,
    color: "#999999",
    fontSize: 15
  },
  goods: {
    display: "flex",
    flexDirection: "row"
  },
  item: {
    display: "flex",
    flexDirection: "row",
    height: 110,
    margin: 20,
    marginBottom: 0,
    borderWidth: 1,
    borderColor: "#ECECEC"
  },
  info: {
    margin: 20
  },
  title: {
    fontSize: 16,
    color: "#272B45"
  },
  subtitle: {
    fontSize: 13,
    color: "#A1A8AE",
    marginTop: 10
  },
  price: {
    display: "flex",
    flexDirection: "row",
    fontSize: 13,
    marginTop: 20
  },
  price1: {
    color: "#A1A8AE",
    marginRight: 10
  },
  price2: {
    color: "#CEB089",
    marginLeft: 5
  }
});
