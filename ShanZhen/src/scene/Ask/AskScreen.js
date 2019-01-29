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
  TouchableOpacity,
  Button
} from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class AskScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.header}>问诊</Text>
          <Text style={styles.instructions}>
            善诊精选医生／患者隐私保护／快速回复
          </Text>
          <Text style={styles.hint}>有问题？快去找专业医生咨询吧</Text>
          <View style={styles.tips}>
            <View style={styles.tip}>
              <Image
                source={{ uri: "https://facebook.github.io/react/logo-og.png" }}
                style={{ width: 35, height: 35 }}
              />
              <Text style={styles.instructions}>体检报告异常解读</Text>
            </View>
            <View style={styles.tip}>
              <Image
                source={{ uri: "https://facebook.github.io/react/logo-og.png" }}
                style={{ width: 35, height: 35 }}
              />
              <Text style={styles.instructions}>身体不适咨询医生</Text>
            </View>
            <View style={styles.tip}>
              <Image
                source={{ uri: "https://facebook.github.io/react/logo-og.png" }}
                style={{ width: 35, height: 35 }}
              />
              <Text style={styles.instructions}>小孩常见疾病处理</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              alert("开始问诊服务啦~");
            }}
          >
            <Text style={styles.ask}>开始问诊</Text>
          </TouchableOpacity>
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
  instructions: {
    textAlign: "left",
    fontSize: 13,
    color: "#999999",
    margin: 20
  },
  hint: {
    fontSize: 18,
    color: "#272B45",
    textAlign: "center",
    margin: 20
  },
  tips: {
    display: "flex",
    flexDirection: "row",
    margin: 20,
    fontSize: 13,
    color: "#999999",
    textAlign: "center"
  },
  tip: {
    justifyContent: "center",
    alignItems: "center",
    height: 150,
    borderWidth: 1,
    borderColor: "#ECECEC",
    borderRadius: 5,
    flex: 1,
    margin: 5
  },
  ask: {
    backgroundColor: "#318FF5",
    borderRadius: 50,
    margin: 20,
    height: 50,
    lineHeight: 50,
    fontSize: 16,
    textAlign: "center",
    color: "#ffffff"
  }
});
