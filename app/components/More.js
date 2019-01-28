import React, { Component } from 'react';
import { Text, TouchableOpacity, SafeAreaView, View } from 'react-native';
import { styles, colors } from '../css';

export default class More extends Component {
  render() {
    return (
      <SafeAreaView style={styles.outerWrapper}>
        <View style={{...styles.container, ...styles.page}}>
          <TouchableOpacity style={styles.buttonSecondary} onPress={() => alert('Not yet implemented.')}>
            <Text style={styles.buttonSecondaryText}>
              Access a home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSecondary} onPress={() => alert('Not yet implemented.')}>
            <Text style={styles.buttonSecondaryText}>
              Sell your home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSecondary} onPress={() => alert('Not yet implemented.')}>
            <Text style={styles.buttonSecondaryText}>
              Contact us
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSecondary} onPress={() => alert('Not yet implemented.')}>
            <Text style={styles.buttonSecondaryText}>
              Change location
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
