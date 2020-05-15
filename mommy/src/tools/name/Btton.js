import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

export default class but extends React.Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={this.SampleFunction}
          style={{width: '80%'}}>
          <LinearGradient
            colors={['#F36227', '#EE227C']}
            style={styles.LinearGradientStyle}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0.9}}
            locations={[0, 1]}>
            <Text style={styles.buttonText}>НЭР СОНГОХ</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  LinearGradientStyle: {
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 14,
    color: '#fff',
    backgroundColor: 'transparent',
  },
});
