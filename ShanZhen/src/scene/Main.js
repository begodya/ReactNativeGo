/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
// import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from "./Home/HomeScreen";
import AskScreen from "./Ask/AskScreen";
import GoodsScreen from "./Goods/GoodsScreen";
import AccountScreen from "./Account/AccountScreen";
import GoodsDetailScreen from "./Goods/GoodsDetailScreen";

// const HomeStack = createStackNavigator({
//   Home: { screen: HomeScreen },
//   GoodsDetail: { screen: GoodsDetailScreen }
// });

// const GoodsStack = createStackNavigator({
//   Goods: { screen: GoodsScreen },
//   GoodsDetail: { screen: GoodsDetailScreen }
// });

const AppTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "善诊",
        tabBarIcon: ({ tintColor, focused }) => (
          <Image
            source={{ uri: "https://facebook.github.io/react/logo-og.png" }}
            style={{ width: 20, height: 20 }}
          />
        )
      }
    },
    Goods: {
      screen: GoodsScreen,
      navigationOptions: {
        tabBarLabel: "体检",
        tabBarIcon: ({ tintColor, focused }) => (
          <Image
            source={{ uri: "https://facebook.github.io/react/logo-og.png" }}
            style={{ width: 20, height: 20 }}
          />
        )
      }
    },
    Ask: {
      screen: AskScreen,
      navigationOptions: {
        tabBarLabel: "问诊",
        tabBarIcon: ({ tintColor, focused }) => (
          <Image
            source={{ uri: "https://facebook.github.io/react/logo-og.png" }}
            style={{ width: 20, height: 20 }}
          />
        )
      }
    },
    Account: {
      screen: AccountScreen,
      navigationOptions: {
        tabBarLabel: "我的",
        tabBarIcon: ({ tintColor, focused }) => (
          <Image
            source={{ uri: "https://facebook.github.io/react/logo-og.png" }}
            style={{ width: 20, height: 20 }}
          />
        )
      }
    }
  },
  {
    // 初始化哪个界面为显示的第一个界面，如果不配置，默认使用RouteConfigs中的第一个页面当做根界面
    initialRouteName: "Home",
    lazy: true,
    tabBarOptions: {
      showIcon: true,
      inactiveTintColor: "#8F8F8F",
      activeTintColor: "#ED5601",
      labelStyle: { fontSize: 12 }
    }
  }
);

export default createAppContainer(AppTabNavigator);
