import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class ContentPlaceHolder extends Component {

  constructor () {
    super();
    this.state = {
      width:0
    }
  }

  _onLayout(event){
    var {width} = event.nativeEvent.layout;
    this.setState({
      width:width
    });
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.background} onLayout={(event) => { this._onLayout(event) }}>

        </View>
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
  background:{
    backgroundColor:'#f6f7f8',
  },
});
