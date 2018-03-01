import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import Header from './src/components/header'
import AlbumList from './src/components/AlbumList'

const App1 = () => (
  <View>
   <Header headerText={'Albums'}/>
   <AlbumList/>
  </View>
);


export default class App extends Component<{}> {
  render() {
    return (<App1/>);
  }
}

