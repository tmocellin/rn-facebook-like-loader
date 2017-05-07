import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Easing
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const gradientWidth = 75;

export default class ContentPlaceHolder extends Component {

  constructor () {
    super();
    this.animatedValue = new Animated.Value(0);
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

  animate () {
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 800,
        easing: Easing.linear
      }
    ).start(() => this.animate())
  }

  componentDidMount () {
    this.animate()
  }

  render() {

    const marginEnd = this.state.width - gradientWidth;
    const marginLeft = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, marginEnd]
    });

    return (
      <View style={styles.wrapper}>
        <View style={styles.background} onLayout={(event) => { this._onLayout(event) }}>
          <Animated.View style={[styles.linGradient,{marginLeft}]}>
            <LinearGradient
              start={{x: 0, y: 0}} end={{x: 1, y: 0}}
              colors={['#f6f7f8', '#e8e8e8', '#dddddd']}  style={styles.linGradient} />
          </Animated.View>
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
    flex:1
  },
  linGradient:{
    width:gradientWidth,
    position:'absolute',
    top:0,
    left:0,
    bottom:0,
  },
});
