import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ListView,
  Image
} from 'react-native';

import ContentPlaceHolder from './components/ContentPlaceHolder';

const data = [{"first":"casimiro araújo","picture":{"thumbnail":"https://randomuser.me/api/portraits/thumb/men/77.jpg"},"post":"Suspicio? Bene ... tunc ibimus? Quis","date":"07/05/2017"},{"first":"marie vetter","picture":{"thumbnail":"https://randomuser.me/api/portraits/thumb/women/1.jpg"},"post":"No speeches. Short speech. You lost ","date":"07/05/2017"},{"first":"denis pires","picture":{"thumbnail":"https://randomuser.me/api/portraits/thumb/men/24.jpg"},"post":"Four pounds... foooour pounds as if ","date":"07/05/2017"},{"first":"milton patterson","picture":{"thumbnail":"https://randomuser.me/api/portraits/thumb/men/45.jpg"},"post":"Walter, you've been busy. You wanna","date":"07/05/2017"},{"first":"پرهام کامروا","picture":{"thumbnail":"https://randomuser.me/api/portraits/thumb/men/31.jpg"},"post":"Sorry, buddy. No can do. Pain ","date":"07/05/2017"},{"first":"jennie coleman","picture":{"thumbnail":"https://randomuser.me/api/portraits/thumb/women/76.jpg"},"post":"You are done. Fired. Do not ","date":"07/05/2017"},{"first":"alfredo wilson","picture":{"thumbnail":"https://randomuser.me/api/portraits/thumb/men/27.jpg"},"post":"Ding ding ding ding. Ding. Ding, ","date":"07/05/2017"},{"first":"david chambers","picture":{"thumbnail":"https://randomuser.me/api/portraits/thumb/men/36.jpg"},"post":"Today's your lucky day. Look around, ","date":"07/05/2017"},{"first":"adam martinez","picture":{"thumbnail":"https://randomuser.me/api/portraits/thumb/men/10.jpg"},"post":"Wayfarer 515, radio check. Wayfarer ","date":"07/05/2017"},{"first":"peggy carter","picture":{"thumbnail":"https://randomuser.me/api/portraits/thumb/women/4.jpg"},"post":"What's your name? Have a seat,","date":"07/05/2017"}];


export default class ReactNativeFbLikeLoader extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      ds:ds,
      dataSource: ds.cloneWithRows(data),
      isLoading:true,
    };
  }

  componentDidMount() {
    setTimeout(()=>{ this.setState({isLoading:false}); }, 1600);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <StatusBar
            hidden={false}
            animated={true}
            translucent={false}
            barStyle="light-content"/>
          <Text style={styles.title}>
            DWA Studio
          </Text>
        </View>
        {this.renderContent()}
      </View>
    );
  }

  renderContent(){
    if (this.state.isLoading) {
      return(
        <View style={{padding:8,backgroundColor:'#d1d1d1'}}>
          <ContentPlaceHolder/>
          <ContentPlaceHolder/>
          <ContentPlaceHolder/>
          <ContentPlaceHolder/>
        </View>
      )
    }else{
      return(
        <ListView style={{backgroundColor:'#d1d1d1'}} contentContainerStyle={{padding:8}}
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this.listItem(rowData)}>
        </ListView>
      )
    }
  }

  listItem(item){
    return(
      <View style={styles.wrapper}>
        <View style={{flexDirection:'row'}}>
          <Image style={{height:60,width:60}} source={{uri: item.picture.thumbnail}}/>
          <View style={{marginLeft:12}}>
            <Text style={{fontSize:16,fontWeight:'bold'}}>{item.first}</Text>
            <Text style={{fontSize:10,marginTop:8,color:'#757575'}}>{item.date}</Text>
          </View>
        </View>
        <Text style={{marginTop:24,fontSize:22}}>{item.post}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar: {
    justifyContent: 'center',
    alignItems: 'center',
    height:64,
    paddingTop:20,
    backgroundColor:'#20B2FF'
  },
  title:{
    fontSize: 17,
    letterSpacing: 0.5,
    fontWeight: '600',
    alignSelf: 'center',
    color:'white'
  },
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
