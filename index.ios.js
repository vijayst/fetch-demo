/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Button
} from 'react-native';
import fetch from 'react-native-fetch-polyfill';

export default class FetchDemo extends Component {
  constructor() {
    super();
    this.state = { loading: false };
  }

  handleFetch() {
    this.setState({ loading: true });
    fetch('http://82.69.20.215:8085/app.json', { timeout: 5000 })
      .then(response => response.json())
      .then(json => {
        this.setState({ loading: false });
      })
      .catch(err => {
        console.warn(err);
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Button
          onPress={this.handleFetch.bind(this)}
          title="Fetch"
          color="#841584"
        />
        {this.state.loading &&
          <View style={styles.loading}>
            <ActivityIndicator size="large" />
          </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF88'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('FetchDemo', () => FetchDemo);
