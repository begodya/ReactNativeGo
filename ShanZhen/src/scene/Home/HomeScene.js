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
  FlatList
} from "react-native";

var Dimensions = require("Dimensions");
var screenWidth = Dimensions.get("window").width;
const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class HomeScene extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
    this.goodsList = [{ key: "1" }, { key: "2" }, { key: "3" }];
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.header}>善诊</Text>
          <View style={styles.banner}>
            <Image
              source={{ uri: "https://facebook.github.io/react/logo-og.png" }}
              style={{ width: 335, height: 115 }}
            />
          </View>
          <View style={styles.tips}>
            <View style={styles.tip1}>
              <Image
                source={{ uri: "https://facebook.github.io/react/logo-og.png" }}
                style={{ width: 58, height: 58 }}
              />
              <Text style={styles.instructions}>体检</Text>
            </View>
            <View style={styles.tip2}>
              <Image
                source={{ uri: "https://facebook.github.io/react/logo-og.png" }}
                style={{ width: 58, height: 58 }}
              />
              <Text style={styles.instructions}>快速问诊</Text>
            </View>
            <View style={styles.tip3}>
              <Image
                source={{ uri: "https://facebook.github.io/react/logo-og.png" }}
                style={{ width: 58, height: 58 }}
              />
              <Text style={styles.instructions}>查报告</Text>
            </View>
          </View>
          <View style={styles.vip}>
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
          </View>

          <FlatList
            data={this.goodsList}
            renderItem={({ item }) => (
              <View style={styles.item} v-for="item in goodsList" v-key="item">
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
            )}
          />
        </ScrollView>
      </View>
    );
  }
}

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
    width: 335,
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
  tip1: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    height: 120,
    width: 110
  },
  tip2: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginTop: 20,
    height: 120,
    width: 110
  },
  tip3: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginTop: 20,
    height: 120,
    width: 110
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
