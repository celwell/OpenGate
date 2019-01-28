import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { colors } from '../css.js';
import Browse from './Browse';
import TradeIn from './TradeIn';
import Advisor from './Advisor';
import Profile from './Profile';
import More from './More';

const Nav = createAppContainer(
  createBottomTabNavigator(
    {
      Browse: Browse,
      TradeIn: {
        screen: TradeIn,
        navigationOptions: {
          title: 'Trade-in',
        }
      },
      Advisor: Advisor,
      Profile: Profile,
      More: More,
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => {
          const { routeName } = navigation.state;
          
          const iconName = (routeName => {
            switch (routeName) {
            case 'Browse': return 'ios-compass';
            case 'TradeIn': return 'ios-home';
            case 'Advisor': return 'ios-briefcase';
            case 'Profile': return 'ios-person';
            case 'More': return 'ios-more';
            default: return 'ios-more';
            }
          })(routeName);

          return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        labelStyle: {
          marginTop: -7,
        },
        activeTintColor: colors.opendoorBlue,
        inactiveTintColor: 'gray',
      },
    }
  )
);

export default Nav;
