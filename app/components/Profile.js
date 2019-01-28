import React, { Component } from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import { styles } from '../css';

export default class Profile extends Component {
  render() {
    return (
      <SafeAreaView style={styles.outerWrapper}>
        <View style={{...styles.container, justifyContent: 'flex-start'}}>
          <View style={{...styles.page, paddingBottom: 0}}>
            <Text style={{...styles.heading, textAlign: 'center'}}>
              Screen not yet implemented.
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
