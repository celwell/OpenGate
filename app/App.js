import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import Orientation, { orientation } from 'react-native-orientation';
import { colors } from './css';
import Browse from './components/Browse';
import TradeIn from './components/TradeIn';
import Advisor from './components/Advisor';
import Profile from './components/Profile';
import More from './components/More';

export default class App extends Component {
  componentDidMount() {
    Orientation.lockToPortrait();
  }
  
  render() {
    return (
      <TabNavigator />
    );
  }
}

const TabNavigator = createAppContainer(createBottomTabNavigator(
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
));
