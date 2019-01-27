import React, {Component} from 'react';
import {Text, TextInput, TouchableOpacity, SafeAreaView, View} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { styles, colors } from '../../css';

export default class SearchMap extends Component {
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
    this.setState({
      showingSearchResults: true
    }, () => this.props.navigation.navigate('SearchSuggestions'));
  };

  render() {
    const { region, markers } = this.state;
    
    return (
      <SafeAreaView style={styles.outerWrapper}>
        <View style={styles.container}>
          <TextInput style={styles.searchInput}
                     placeholder="City, neighborhood, zip"
                     autoComplete="off"
                     autoCorrect={false}
                     clearButtonMode="while-editing"
                     onChangeText={text => this.setState({search: text})}
            onFocus={this.showSearchResults} />
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
        </View>
      </SafeAreaView>
    );
  }
}
