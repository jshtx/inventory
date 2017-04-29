/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Splash from './Splash';
import Home from './app/Components/Home'
import BarcodeScan from './app/Components/BarcodeScan'
//import AdjustInventory from './app/Components/AdjustInventory'
import Login from './app/Components/Login'
import AdjustInventory from './app/Components/AdjustInventory'

export default class inventoryProject extends Component {
// The configureScene function allows us to change the animation properties of a scene
  configureScene() {
    return Navigator.SceneConfigs.FloatFromBottom;
  }

  // Our renderScene function will choose which scene to render based on the route id
  renderScene(route, navigator) {
    if (route.id === 1) {
      return <Home navigator={navigator} />
    } 
     else if (route.id === 2) {
      return <Login navigator={navigator} />
    }
    else if (route.id === 3) {
      return <Splash navigator={navigator} />
    }
    else if (route.id === 4) {
      return <BarcodeScan navigator={navigator} data={route.passProps}/>
    }
    else if (route.id === 5) {
      return <AdjustInventory navigator={navigator} />
    }
  }

  render() {
    return (
      // Our Navigator handles the transition between different scenes in our app
      <Navigator
        // The first page we are going to render
        initialRoute={{ id: 3 }}
        // Passing in our renderScene function
        renderScene={this.renderScene}
        // Passing in our configureScene function
        configureScene={this.configureScene}
      />
    );
  }
}

AppRegistry.registerComponent('inventoryProject', () => inventoryProject);
