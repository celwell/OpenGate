import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { fade } from '../../util';
import SearchMap from './SearchMap';
import SearchSuggestions from './SearchSuggestions';

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
