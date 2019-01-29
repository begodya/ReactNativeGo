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
  FlatList,
  Image
} from "react-native";
import ScrollableTabView, {
  DefaultTabBar
} from "react-native-scrollable-tab-view";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class GoodsDetailScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
    this.goodsList = [
      { key: "1" },
      { key: "2" },
      { key: "3" },
      { key: "4" },
      { key: "5" }
    ];
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.header}>商品详情</Text>
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
  }
});
