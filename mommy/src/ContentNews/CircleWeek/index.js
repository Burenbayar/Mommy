import React from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';
import CountdownCircle from 'react-native-countdown-circle';

const CircleWeek = () => {
  return (
    <CountdownCircle
      seconds={2}
      radius={30}
      borderWidth={8}
      color="#ff003f"
      bgColor="#fff"
      textStyle={{fontSize: 20}}
    />
  );
};

export default CircleWeek;
