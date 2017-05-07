import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ContentPlaceHolder from './components/ContentPlaceHolder';


export default class ReactNativeFbLikeLoader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ContentPlaceHolder/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    padding:12,
  },
});
