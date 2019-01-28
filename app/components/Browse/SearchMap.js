import React, { Component } from 'react';
import { Text, TextInput, Image, TouchableOpacity, SafeAreaView, View } from 'react-native';
import { Marker } from 'react-native-maps';
import ClusteredMapView from 'react-native-maps-super-cluster';
import { getHouses } from '../../services/api';
import { styles, colors } from '../../css';
import mapPin from '../../assets/images/mapPin.png';

export default class SearchMap extends Component {
  state = {
    search: "",
    showingSearchResults: false,
    markers: [],
  }

  initHouses() {
    this.setState({
      markers: getHouses()
    });
  }

  initGeolocation() {
    navigator.geolocation.getCurrentPosition(
      ({coords}) => {
        const {latitude, longitude} = coords

        this.setState({
          position: {
            latitude,
            longitude,
          },
        })

        this.map.mapview.animateToRegion({
          latitude,
          longitude,
          latitudeDelta: 0.9,
          longitudeDelta: 0.9,
        }, 0);
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    )
  }
  
  componentDidMount() {
    this.initHouses();
    this.initGeolocation();
  }

  renderCluster = (cluster, onPress) => {
    const pointCount = cluster.pointCount,
          coordinate = cluster.coordinate,
          clusterId = cluster.clusterId,
          clusteringEngine = this.map.getClusteringEngine(),
          clusteredPoints = clusteringEngine.getLeaves(clusterId, 100);

    return (
      <Marker coordinate={coordinate} onPress={onPress}>
        <View style={styles.mapCluster}>
          <Text style={styles.mapClusterText}>
            {pointCount}
          </Text>
        </View>
      </Marker>
    );
  };

  renderMarker = (data) => (
    <Marker key={data.id} coordinate={data.location}>
      <Image source={mapPin} style={styles.mapPin} />
    </Marker>
  );

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
            <ClusteredMapView
              style={styles.map}
              data={markers}
              initialRegion={{ // fallback if geolocation is disallowed
                latitude: 34.110055, longitude: -118.281660,
                latitudeDelta: 0.9, longitudeDelta: 0.9
              }}
              showsUserLocation
              ref={(r) => { this.map = r }}
              renderMarker={this.renderMarker}
              renderCluster={this.renderCluster} />        
        </View>
      </SafeAreaView>
    );
  }
}
