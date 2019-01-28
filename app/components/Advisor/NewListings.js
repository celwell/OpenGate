import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../../css';

const NewListings = () => {
  return (
    <View style={styles.page}>
      <View style={{ paddingBottom: 10 }}>
        <Text style={styles.heading}>
          New listings
        </Text>
      </View>
      <Text>
        No new listings yet.
      </Text>
    </View>
  );
};

export default NewListings;
