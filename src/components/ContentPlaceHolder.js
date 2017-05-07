import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class ContentPlaceHolder extends Component {

  constructor () {
    super()
  }

  render() {
    return (
      <View style={styles.wrapper}>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  wrapper:{
    height:160,
    borderWidth:1,
    borderRadius:3,
    borderColor: '#dfe0e4',
    backgroundColor:'#fff',
    padding:12,
    marginBottom:12,
  },


});
