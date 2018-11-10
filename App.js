import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

import config from './config';

export default class App extends React.Component {
  componentDidMount() {
    axios.get(config.baseURL)
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
