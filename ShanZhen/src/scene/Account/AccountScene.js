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
  ScrollView,
  Image,
  FlatList
} from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class AccountScene extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
    this.itemList = [
      { key: "我的订单" },
      { key: "我的报告" },
      { key: "抵扣券" },
      { key: "设置" },
      { key: "客服电话（7:30-20:00）" }
    ];
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.header}>
            <Image
              source={{ uri: "https://facebook.github.io/react/logo-og.png" }}
              style={{ width: 60, height: 60 }}
            />
            <Text style={styles.login}>点击登录</Text>
          </View>
          <View style={styles.hint}>
            <Image
              source={{ uri: "https://facebook.github.io/react/logo-og.png" }}
              style={{ width: 15, height: 15 }}
            />
            <Text style={styles.hint1}>会员权益</Text>
            <Text style={styles.hint2}>加入会员</Text>
          </View>
          <View style={styles.tips}>
            <View style={styles.tip1}>
              <Image
                source={{ uri: "https://facebook.github.io/react/logo-og.png" }}
                style={{ width: 30, height: 30 }}
              />
              <Text style={styles.instructions}>免费体检</Text>
            </View>
            <View style={styles.tip2}>
              <Image
                source={{ uri: "https://facebook.github.io/react/logo-og.png" }}
                style={{ width: 30, height: 30 }}
              />
              <Text style={styles.instructions}>会员专享价</Text>
            </View>
            <View style={styles.tip3}>
              <Image
                source={{ uri: "https://facebook.github.io/react/logo-og.png" }}
                style={{ width: 30, height: 30 }}
              />
              <Text style={styles.instructions}>医生服务</Text>
            </View>
          </View>
          <FlatList
            data={this.itemList}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Image
                  source={{
                    uri: "https://facebook.github.io/react/logo-og.png"
                  }}
                  style={{ width: 20, height: 20 }}
                />
                <Text style={styles.title}>{item.key}</Text>
                <Image
                  source={{
                    uri: "https://facebook.github.io/react/logo-og.png"
                  }}
                  style={{ width: 15, height: 15, marginLeft: "auto" }}
                />
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
    marginTop: 60,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  login: {
    marginTop: 10,
    color: "#333333",
    fontSize: 16
  },
  hint: {
    display: "flex",
    flexDirection: "row",
    margin: 20,
    height: 20,
    fontSize: 16
  },
  hint1: {
    color: "#333333",
    marginLeft: 10
  },
  hint2: {
    width: 70,
    lineHeight: 20,
    marginLeft: "auto",
    color: "#ffffff",
    backgroundColor: "#BBA06D",
    textAlign: "center"
  },
  tips: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
    height: 120,
    textAlign: "center"
  },
  tip1: {
    justifyContent: "center",
    alignItems: "center",
    width: 110
  },
  tip2: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    width: 110
  },
  tip3: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    width: 110
  },
  instructions: {
    textAlign: "center",
    fontSize: 13,
    color: "#272B45",
    margin: 20
  },
  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC"
  },
  title: {
    color: "#333333",
    fontSize: 16,
    marginLeft: 10
  }
});
