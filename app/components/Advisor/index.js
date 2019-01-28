import React, { Component } from 'react';
import { SafeAreaView, View, } from 'react-native';
import { styles } from '../../css';
import AdvisorContact from './AdvisorContact';
import GetAnAgent from './GetAnAgent';
import NewListings from './NewListings';

export default class Advisor extends Component {
  render() {
    return (
      <SafeAreaView style={styles.outerWrapper}>
        <View style={{...styles.container, justifyContent: 'flex-start'}}>
          <AdvisorContact phoneNumber='000-000-0000' emailAddress='example@example.com' />
          <View style={styles.horizontalRule} />
          <GetAnAgent />
          <View style={styles.horizontalRule} />
          <NewListings />
        </View>
      </SafeAreaView>
    );
  }
}
