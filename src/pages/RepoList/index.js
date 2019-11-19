import React from 'react';
import {Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  welcome: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '50%',
  },
});

const Main = () => (
  <Text style={styles.welcome}>LIST!</Text>
);

export default Main;
