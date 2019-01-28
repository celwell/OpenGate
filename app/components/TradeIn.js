import React, { Component } from 'react';
import { Text, TouchableOpacity, SafeAreaView, View, Image } from 'react-native';
import { styles } from '../css';
import fairMarket from '../assets/images/fairMarket.png';
import hassleFree from '../assets/images/hassleFree.png';
import moveReady from '../assets/images/moveReady.png';

export default class TradeIn extends Component {
  render() {
    return (
      <SafeAreaView style={styles.outerWrapper}>
        <View style={{...styles.container, ...styles.page}}>
          <View style={{ paddingTop: 17 }}>
            <Text style={styles.heading}>
              Also selling? Trade-in with Opendoor{'\n'}
            </Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.contentText}>
              Now you can trade-in your home the minute you're ready. Get started with an all-cash trade-in offer in 48 hours.{'\n'}
            </Text>
            <View style={styles.rowContainer}>
              <View style={styles.featureRowImageContainer}>
                <Image source={fairMarket} style={styles.featureRowImage} />
              </View>
              <View style={styles.featureRowDescription}>
                <View style={styles.featureRowHeading}>
                  <Text style={styles.featureRowHeadingText}>One streamlined move</Text>
                </View>
                <Text style={styles.featureRowDescriptionText}>
                  We'll coordinate your purchase and sale, so you close on the date of your choice and move just once
                </Text>
              </View>
            </View>
            <View style={styles.rowContainer}>
              <View style={styles.featureRowImageContainer}>
                <Image source={hassleFree} style={styles.featureRowImage} />
              </View>
              <View style={styles.featureRowDescription}>
                <View style={styles.featureRowHeading}>
                  <Text style={styles.featureRowHeadingText}>Competitive, all-cash offer</Text>
                </View>
                <Text style={styles.featureRowDescriptionText}>
                  Get a market-value offer, with no risk of financing fall-through
                </Text>
              </View>
            </View>
            <View style={styles.rowContainer}>
              <View style={styles.featureRowImageContainer}>
                <Image source={moveReady} style={styles.featureRowImage} />
              </View>
              <View style={styles.featureRowDescription}>
                <View style={styles.featureRowHeading}>
                  <Text style={styles.featureRowHeadingText}>Save thousands</Text>
                </View>
                <Text style={styles.featureRowDescriptionText}>
                  Get $1,000 back at close when you trade-in (and an extra $1,000 if you buy direct!)
                </Text>
              </View>
            </View>
          </View>
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
