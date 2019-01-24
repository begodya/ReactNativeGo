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
import HomeScene from "./Home/HomeScene";
import AskScene from "./Ask/AskScene";
import GoodsScene from "./Goods/GoodsScene";
import AccountScene from "./Account/AccountScene";

export const AppTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScene,
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
      screen: GoodsScene,
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
      screen: AskScene,
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
      screen: AccountScene,
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

// export const AppStackNavigator = createStackNavigator({
//   Home: {
//     screen: HomeScene
//   },
//   Goods: {
//     screen: GoodsScene
//   },
//   Ask: {
//     screen: AskScene
//   },
//   Account: {
//     screen: AccountScene
//   }
// })

export default createAppContainer(AppTabNavigator);
