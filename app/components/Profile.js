import React, {Component} from 'react';
import {Text, TouchableOpacity, SafeAreaView, View} from 'react-native';
import { styles, colors } from '../css';

export default class Profile extends Component {
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
