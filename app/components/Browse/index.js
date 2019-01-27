import React, {Component} from 'react';
import {Text, TextInput, TouchableOpacity, SafeAreaView, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import SearchMap from './SearchMap';
import SearchSuggestions from './SearchSuggestions';
import { fade } from '../../util';
import { styles, colors } from '../../css';

export default createStackNavigator(
  {
    SearchMap,
    SearchSuggestions,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
    transitionConfig: () => ({
      screenInterpolator: (props) => {
        return fade(props)
      }
    })
  }
);



