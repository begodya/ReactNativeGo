/** @format */

import React, { Component } from "react";
import {AppRegistry} from 'react-native';
import Main from './src/scene/Main';
import {name as appName} from './app.json';

export default class ShanZhen extends Component {
  render() {
    return (
      <Main></Main>
    );
  }
}

AppRegistry.registerComponent(appName, () => ShanZhen);
