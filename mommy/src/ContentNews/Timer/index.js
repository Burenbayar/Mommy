import React, {Component, useState, useEffect} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
const Timer = (props) => (
  <View style={styles.container}>
    <CountdownCircleTimer
      isPlaying={props.readCheck}
      duration={15}
      size={wp('8.1%')}
      strokeLinecap={0}
      trailColor="transparent"
      strokeWidth={3}
      onComplete={() => {
        console.log('timer complete');
      }}
      colors={[['white', 0.1], ['#FA3D5A', 0.33], ['#FA3D5A']]}>
      <MaterialIcon
        style={{
          alignSelf: 'center',
        }}
        name="heart-circle"
        size={wp('6.5%')}
        color="#FA3D5A"></MaterialIcon>
    </CountdownCircleTimer>
  </View>
);

export default Timer;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 5,
    top: 5,
    borderRadius: 30,
    width: wp('9%'),
    height: wp('9%'),
  },
});
