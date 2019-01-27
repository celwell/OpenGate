import React, {Component} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { styles, colors } from './css';
import Browse from './components/Browse';
import TradeIn from './components/TradeIn';
import Advisor from './components/Advisor';
import Profile from './components/Profile';
import More from './components/More';

export default class App extends Component {
  render() {
    return (
      <TabNavigator />
    );
  }
}

const withStyles = (WrappedComponent, stylesheet) => {
  return class extends Component {
    render() {
      return (
        <WrappedComponent {...this.props} />
      );
    }
  }
};

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
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Browse') {
          iconName = 'ios-compass';
        } else if (routeName === 'TradeIn') {
          iconName = 'ios-home';
        } else if (routeName === 'Advisor') {
          iconName = 'ios-briefcase';
        } else if (routeName === 'Profile') {
          iconName = 'ios-person';
        } else if (routeName === 'More') {
          iconName = 'ios-more';
        }

        return <IconComponent name={iconName} size={25} color={tintColor} />;
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
