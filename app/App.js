import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, TouchableOpacity, SafeAreaView, View} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

export default class App extends Component {
  render() {
    return (
      <TabNavigator />
    );
  }
}

const styles = StyleSheet.create({
  outerWrapper: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: '#ffffff',
  },
  page: {
    padding: 25,
  },
  content: {
    flex: 1,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    color: '#4A4F6D',
  },
  heading: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4A4F6D',
  },
  search: {
    fontSize: 16,
    padding: 10,
    margin: 8,
    backgroundColor: '#eeeeee',
    borderRadius: 4,
  },
  map: {
    flex: 1,
    zIndex: -1,
  },
  buttonPrimary: {
    marginBottom: 8,
    padding: 14,
    alignItems: 'center',
    backgroundColor: '#2E89E2', // Opendoor blue
    borderRadius: 2,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.35, 
    shadowRadius: 15,
  },
  buttonPrimaryText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#ffffff',
  }
});


class Browse extends Component {
  state = {
    search: "",
    showingSearchResults: false,
    markers: [
      {
        id: 0,
        latlng: {
          latitude: 37.792502,
          longitude: -122.401860
        },
        title: "Test",
        description: "Test descirption",
      },
      {
        id: 1,
        latlng: {
          latitude: 37.793502,
          longitude: -122.402860
        },
        title: "Test",
        description: "Test descirption",
      }
    ],
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      ({coords}) => {
        const {latitude, longitude} = coords

        this.setState({
          position: {
            latitude,
            longitude,
          },
          region: {
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
        })
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    )
  }

  showSearchResults = () => {
    this.setState({ showingSearchResults: true });
  };

  render() {
    const { region, markers } = this.state;
    
    return (
      <SafeAreaView style={styles.outerWrapper}>
        <View style={styles.container}>
          <TextInput style={styles.search}
                     placeholder="City, neighborhood, zip"
                     autoComplete="off"
                     autoCorrect={false}
                     clearButtonMode="while-editing"
                     onChangeText={text => this.setState({search: text})}
            onFocus={this.showSearchResults} />
            <Map region={region} markers={markers} />
        </View>
      </SafeAreaView>
    );
  }
}

const Map = ({ region, markers, onRegionChange }) => {
  return (
    <MapView style={styles.map}
             region={region}
             showsUserLocation
             showsMyLocationButton={true}>
      {markers.map(marker => (
        <Marker
          key={marker.id}
          coordinate={marker.latlng}
          title={marker.title}
          description={marker.description}
          />
      ))}         
    </MapView>
  );
};

const QuerySuggestions = () => {
  return (
    <View><Text>Start typing to add a location.</Text></View>
  );
};

const SearchStack = createStackNavigator(
  {
    Map: Map,
    QuerySuggestions: QuerySuggestions,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);

class TradeIn extends Component {
  render() {
    return (
      <SafeAreaView style={styles.outerWrapper}>
        <View style={{...styles.container, ...styles.page}}>
          <View style={{ paddingTop: 17 }}>
            <Text style={styles.heading}>
              Also selling? Trade-in with Opendoor{'\n'}
            </Text>
          </View>
          <Text style={styles.content}>
            Now you can trade-in your home the minute you're ready. Get started with an all-cash trade-in offer in 48 hours.
          </Text>
          <TouchableOpacity style={styles.buttonPrimary} onPress={() => alert('Not yet implemented.')}>
            <Text style={styles.buttonPrimaryText}>
              Get my free trade-in offer
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

class Advisor extends Component {
  render() {
    return (
      <SafeAreaView style={styles.outerWrapper}>
        <View><Text>Hey advisor</Text></View>
      </SafeAreaView>
    );
  }
}

class Profile extends Component {
  render() {
    return (
      <SafeAreaView style={styles.outerWrapper}>
        <View><Text>Hey profile</Text></View>
      </SafeAreaView>
    );
  }
}

class More extends Component {
  render() {
    return (
      <SafeAreaView style={styles.outerWrapper}>
        <View><Text>Hey more</Text></View>
      </SafeAreaView>
    );
  }
}


const TabNavigator = createAppContainer(createBottomTabNavigator(
  {
    Browse: Browse,
    TradeIn: TradeIn,
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
      tabStyle: {
        height: 56,
      },
      labelStyle: {
        marginTop: -8,
      },
      activeTintColor: '#2E89E2', // Opendoor blue
      inactiveTintColor: 'gray',
    },
  }
));
