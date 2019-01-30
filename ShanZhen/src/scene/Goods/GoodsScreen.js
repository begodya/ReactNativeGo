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
  TouchableOpacity,
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
export default class GoodsScreen extends Component<Props> {
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
          <Text style={styles.header}>体检</Text>
          <ScrollableTabView
            style={{ width: 220 }}
            tabBarUnderlineStyle={{
              backgroundColor: "#318FF5",
              width: 30,
              height: 2,
              marginLeft: 20
            }}
            tabBarActiveTextColor="#318FF5"
            renderTabBar={() => <DefaultTabBar />}
          >
            <View
              tabLabel="老年人"
              classid="439"
              popToHome={mark => this.pushNative(mark)}
              htmlContent={html => this.pushHtml(html)}
            />
            <View
              tabLabel="年轻人"
              classid="440"
              popToHome={mark => this.pushNative(mark)}
              htmlContent={html => this.pushHtml(html)}
            />
            <View
              tabLabel="公立医院"
              classid="442"
              popToHome={mark => this.pushNative(mark)}
              htmlContent={html => this.pushHtml(html)}
            />
          </ScrollableTabView>
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
