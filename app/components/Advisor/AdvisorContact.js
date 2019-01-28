import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Image, Linking } from 'react-native';
import { styles } from '../../css';
import avatar from '../../assets/images/avatar.png';

const AdvisorContact = (props) => {
  const { phoneNumber, emailAddress } = props;
  
  return (
    <View style={{...styles.page, paddingBottom: 0}}>
      <Text style={{...styles.heading, textAlign: 'center'}}>
        My Advisor
      </Text>
      <View style={{...styles.rowContainer, justifyContent: 'center'}}>
        <View style={{ paddingRight: 20 }}>
          <Image source={avatar} style={styles.featureRowImage} />
        </View>
        <Text style={styles.heading}>Opendoor Homes</Text>
      </View>
      <View style={{...styles.rowContainer, justifyContent: 'center', marginBottom: 10}}>
        <TouchableOpacity style={{...styles.buttonSegmented, ...styles.buttonSegmentedLeft}} onPress={() => Linking.openURL(`tel:${phoneNumber}`)}>
          <Text style={styles.buttonSegmentedText}>
            Call
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSegmented} onPress={() => Linking.openURL(`mailto:${emailAddress}`)}>
          <Text style={styles.buttonSegmentedText}>
            Email
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AdvisorContact;
