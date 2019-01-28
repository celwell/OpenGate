import React, { Component } from 'react';
import Orientation from 'react-native-orientation';
import Nav from './components/Nav';

export default class App extends Component {
  componentDidMount() {
    Orientation.lockToPortrait();
  }
  
  render() {
    return <Nav />;
  }
}
