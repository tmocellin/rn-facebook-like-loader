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

          <View style={styles.header}>
            <View style={styles.headerLineSeparator}/>
            <View style={styles.headerLine}>
              <View style={{height:12,width:8,backgroundColor:'#fff'}}/>
              <View style={{height:12,width:82,backgroundColor:'#fff'}}/>
            </View>
            <View style={styles.headerLineSeparator}/>
            <View style={styles.headerLine}>
              <View style={{height:8,width:8,backgroundColor:'#fff'}}/>
              <View style={{height:8,width:160,backgroundColor:'#fff'}}/>
            </View>
            <View style={{height:24,backgroundColor:'#fff'}}/>
          </View>
          <View style={{height:16,backgroundColor:'#fff'}}/>

          <View style={styles.content}>
            <View style={styles.contentLine}>
              <View style={{height:10,width:32,backgroundColor:'#fff'}}/>
            </View>
            <View style={styles.contentLineSeperator}/>
            <View style={styles.contentLine}>
              <View style={{height:10,width:20,backgroundColor:'#fff'}}/>
            </View>
            <View style={styles.contentLineSeperator}/>
            <View style={styles.contentLine}>
              <View style={{height:10,width:90,backgroundColor:'#fff'}}/>
            </View>
          </View>

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
  linGradient:{
    width:gradientWidth,
    position:'absolute',
    top:0,
    left:0,
    bottom:0,
  },
  header:{
    marginLeft:60,
    flexDirection:'column',
  },
  headerLine:{
    justifyContent:'space-between',flexDirection:'row'
  },
  headerLineSeparator:{
    height:8,backgroundColor:'#fff'
  },
  content:{
    flexDirection:'column',
  },
  contentLine:{
    flexDirection:'row',
    justifyContent:'flex-end'
  },
  contentLineSeperator:{height:4,backgroundColor:'#fff'}
});
