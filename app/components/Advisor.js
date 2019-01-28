import React, { Component } from 'react';
import { Text, TouchableOpacity, SafeAreaView, View, Image, Linking } from 'react-native';
import { styles, colors } from '../css';
import avatar from '../assets/images/avatar.png';

const advisor = {
  phoneNumber: '000-000-0000',
  emailAddress: 'example@example.com',
};

export default class Advisor extends Component {
  render() {
    return (
      <SafeAreaView style={styles.outerWrapper}>
        <View style={{...styles.container, justifyContent: 'flex-start'}}>
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
              <TouchableOpacity style={{...styles.buttonSegmented, ...styles.buttonSegmentedLeft}} onPress={() => Linking.openURL(`tel:${advisor.phoneNumber}`)}>
                <Text style={styles.buttonSegmentedText}>
                  Call
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonSegmented} onPress={() => Linking.openURL(`mailto:${advisor.emailAddress}`)}>
                <Text style={styles.buttonSegmentedText}>
                  Email
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.horizontalRule} />
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
          <View style={styles.horizontalRule} />
          <View style={styles.page}>
            <View style={{ paddingBottom: 10 }}>
              <Text style={styles.heading}>
                New listings
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
