import React, { Component } from 'react';
import { Text, TouchableOpacity, SafeAreaView, View } from 'react-native';
import { styles } from '../css';

export default class More extends Component {
  renderButton(text) {
    return (
      <TouchableOpacity key={text}
                        style={styles.buttonSecondary}
                        onPress={() => alert(`${text}: Not yet implemented.`)}>
        <Text style={styles.buttonSecondaryText}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  }
  
  render() {
    const buttons = ['Access a home', 'Sell your home', 'Contact us', 'Change location'];
    
    return (
      <SafeAreaView style={styles.outerWrapper}>
        <View style={{...styles.container, ...styles.page}}>
          {buttons.map(text => this.renderButton(text))}
        </View>
      </SafeAreaView>
    );
  }
}
