/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import axios from 'axios';

import { Image } from 'react-native';

let total_confirmed = "3 204 705"
let total_death = "227 723"
let total_pays = "185 "

let pays1 = "US"
let death1 = "60 999"
let confirmed1 = "1 040 488"

let pays2 = "Spain"
let death2 = "24 275"
let confirmed2 = "236 899"

let pays3 = "Italy"
let death3 = "27 682"
let confirmed3 = "203 591"

let pays4 = "France"
let death4 = "24 121"
let confirmed4 = "166 543"

let pays5 = "UK"
let death5 = "26 166"
let confirmed5 = "166 441"

let pays6 = "Germany"
let death6 = "6 467"
let confirmed6 = "161 539"

let pays7 = "Turkey"
let death7 = "3 081"
let confirmed7 = "117 589"

let pays8 = "Russia"
let death8 = "1 073"
let confirmed8 = "106 498"

let pays9 = "Iran"
let death9 = "5 957"
let confirmed9 = "93 657"

let pays10 = "China"
let death10 = "4 637"
let confirmed10 = "83 944"


const App: () => React$Node = () => {
  axios.get(('http://10.0.2.2:3000/api/stuff'), res => {

  })
  .then((res) => {
    console.log(res);
  })
  .catch(function(error) {
    console.log('There has been a problem with your fetch operation: ' + error.message);
    throw error;
  });
  return (
    <ScrollView>
          <View>
            <Image
              style={{flex: 1,
                      width: 420,
                      height: 500,
                      resizeMode: 'contain',
                      alignItems: 'center'
              }}
              source={require('./map.jpg')}
            />
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{total_pays} contry</Text>
            <Text style={styles.sectionDescription}>
              <Text style={styles.highlight}>{total_confirmed} confirmed</Text>
            </Text>
            <Text style={styles.sectionDescription}>
              <Text style={styles.highlight}>{total_death} total_death</Text>
            </Text>
          </View>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>{pays1}</Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>{confirmed1} confirmed</Text>
              </Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>{death1} death</Text>
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>{pays2}</Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>{confirmed2} confirmed</Text>
              </Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>{death2} death</Text>
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>{pays3}</Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>{confirmed3} confirmed</Text>
              </Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>{death3} death</Text>
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>{pays4}</Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>{confirmed4} confirmed</Text>
              </Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>{death4} death</Text>
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>{pays5}</Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>{confirmed5} confirmed</Text>
              </Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>{death5} death</Text>
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>{pays6}</Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>{confirmed6} confirmed</Text>
              </Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>{death6} death</Text>
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>{pays7}</Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>{confirmed7} confirmed</Text>
              </Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>{death7} death</Text>
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>{pays8}</Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>{confirmed8} confirmed</Text>
              </Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>{death8} death</Text>
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>{pays9}</Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>{confirmed9} confirmed</Text>
              </Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>{death9} death</Text>
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>{pays10}</Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>{confirmed10} confirmed</Text>
              </Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>{death10} death</Text>
              </Text>
            </View>
          </View>
        </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.red,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
    color: Colors.red,
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
