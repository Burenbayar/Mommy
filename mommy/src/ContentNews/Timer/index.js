import React, {Component, useState, useEffect} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Svg, {Circle} from 'react-native-svg';

const Timer = (props) => {
  const [second, setSecond] = useState(0);
  const [percent, setPercent] = useState(0);
  const upgradeSecond = () => {
    setTimeout(() => {
      setPercent(percent + 1);
    }, 5);
  };
  useEffect(() => {
    if (percent < second) {
      upgradeSecond();
    }
  }, [percent]);
  return (
    <View style={styles.container}>
      <Svg viewBox="0 0 12 12">
        <Circle
          fill="white"
          cx="50%"
          cy="50%"
          r="30%"
          stroke="white"
          strokeWidth={1.5}
        />
        <Circle
          cx="50%"
          cy="50%"
          r="30%"
          fill="transparent"
          stroke="#FA3D5A"
          strokeWidth={0.8}
          strokeDasharray={`${percent} ${100 - percent}`}
          strokeDashoffset="10"
        />
        <MaterialIcon
          style={{alignSelf: 'center', marginTop: '20%'}}
          name="heart-circle"
          size={25}
          color="#FA3D5A"></MaterialIcon>
      </Svg>
    </View>
  );
};

export default Timer;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 2,
    top: 5,
    width: wp('12%'),
    height: wp('12%'),
  },
});
