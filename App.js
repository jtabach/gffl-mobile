import * as Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

const { manifest } = Expo.Constants;

export default class App extends React.Component {
  componentDidMount() {
    const devUrl = manifest.debuggerHost.split(`:`).shift().concat(`:5000`);
    axios.get(`http://${devUrl}`)
    .then(res => console.log(res.data));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
