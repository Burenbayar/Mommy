import React, {Component, useState, useEffect} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Circle} from 'react-circle';
const CircleWeek = (props) => {
  return (
    <View>
      <Circle
        animate={true} // Boolean: Animated/Static progress
        responsive={true} // Boolean: Make SVG adapt to parent size
        size={100} // Number: Defines the size of the circle.
        lineWidth={14} // Number: Defines the thickness of the circle's stroke.
        progress={69} // Number: Update to change the progress and percentage.
        progressColor="cornflowerblue" // String: Color of "progress" portion of circle.
        bgColor="yellow" // String: Color of "empty" portion of circle.
      />
    </View>
  );
};
export default CircleWeek;

const styles = StyleSheet.create({
  container2: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('-19%'),
    width: wp('47%'),
    height: wp('47%'),
  },
  day2: {
    fontSize: 61,
    color: 'white',
    opacity: 0.6,
  },
  week2: {
    marginTop: 13,
    marginLeft: 6,
    color: '#9E9898',
    fontSize: 11,
  },
});
