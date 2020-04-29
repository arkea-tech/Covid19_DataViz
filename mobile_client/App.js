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

import { Image } from 'react-native';

const App: () => React$Node = () => {
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
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>pays1</Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>confirmed, death</Text>
              </Text>
            </View>
            <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>pays2</Text>
            <Text style={styles.sectionDescription}>
              <Text style={styles.highlight}>confirmed, death</Text>
            </Text>
            </View>
            <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>pays3</Text>
            <Text style={styles.sectionDescription}>
              <Text style={styles.highlight}>confirmed, death</Text>
            </Text>
            </View>
            <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>pays4</Text>
            <Text style={styles.sectionDescription}>
              <Text style={styles.highlight}>confirmed, death</Text>
            </Text>
            </View>
            <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>pays5</Text>
            <Text style={styles.sectionDescription}>
              <Text style={styles.highlight}>confirmed, death</Text>
            </Text>
            </View>
            <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>pays6</Text>
            <Text style={styles.sectionDescription}>
              <Text style={styles.highlight}>confirmed, death</Text>
            </Text>
            </View>
            <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>pays7</Text>
            <Text style={styles.sectionDescription}>
              <Text style={styles.highlight}>confirmed, death</Text>
            </Text>
            </View>
            <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>pays8</Text>
            <Text style={styles.sectionDescription}>
              <Text style={styles.highlight}>confirmed, death</Text>
            </Text>
            </View>
            <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>pays9</Text>
            <Text style={styles.sectionDescription}>
              <Text style={styles.highlight}>confirmed, death</Text>
            </Text>
            </View>
            <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>pays10</Text>
            <Text style={styles.sectionDescription}>
              <Text style={styles.highlight}>confirmed, death</Text>
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
