import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../css';

const GetAnAgent = () => {
  return (
    <View style={styles.page}>
      <View style={{ paddingBottom: 10 }}>
        <Text style={styles.heading}>
          Get an agent on your side
        </Text>
      </View>
      <Text style={styles.contentText}>
        Confirm your contact information and Opendoor Homes will connect you to a top local agent.{'\n'}
      </Text>
      <TouchableOpacity style={styles.buttonPrimary} onPress={() => alert('Not yet implemented.')}>
        <Text style={styles.buttonPrimaryText}>
          Get connected
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default GetAnAgent;
