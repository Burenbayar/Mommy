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
      duration={20}
      size={30}
      strokeLinecap={0}
      trailColor="#FA3D5A"
      strokeWidth={5}
      colors={[['white', 0.33], ['white', 0.33], ['white']]}>
      <MaterialIcon
        style={{
          alignSelf: 'center',
        }}
        name="heart-circle"
        size={wp('7%')}
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
    right: 10,
    top: 10,
    borderRadius: 30,
    width: wp('7%'),
    height: wp('7%'),
  },
});
