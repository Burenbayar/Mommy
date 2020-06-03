import React, {Component, useState, useEffect} from 'react';
import {Image, View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Svg, {Circle} from 'react-native-svg';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const ArrowButton = (props) => {
  const [index, setIndex] = useState(props.index);
  const [days, setDays] = useState(props.days);
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    if (percent < days[index]) {
      setPercent((days[index] * 100) / 40);
    }
  }, [percent]);

  return (
    <View style={{flexDirection: 'column'}}>
      <View style={styles.container}>
        <View>
          <TouchableOpacity
            onPress={() => {
              setIndex(index - 1);
              setPercent((days[index - 1] * 100) / 40);
            }}
            style={styles.btn1}>
            <Icon
              style={{marginLeft: wp('1%')}}
              size={wp('8%')}
              name={'ios-arrow-back'}
              color="#9E9898"></Icon>
            <View style={styles.weekDay}>
              <Text style={styles.index}>{days[index]}</Text>
              <View>
                <Text style={styles.day}>Долоо хоног</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.container2}>
            <Svg viewBox="0 0 35 35">
              <Circle
                cx="50%"
                cy="50%"
                r="46%"
                fill="transparent"
                stroke="white"
                strokeWidth={2.6}
              />
              <Circle
                cx="50%"
                cy="50%"
                r="46%"
                fill="transparent"
                stroke="#FA3D5A"
                strokeWidth={2}
                strokeDasharray={`${percent} ${100 - percent}`}
                strokeDashoffset="25"
              />
              <View style={{alignItems: 'center', paddingTop: '16%'}}>
                <Text style={styles.day2}>{days[index + 1]}</Text>
              </View>
            </Svg>
          </View>
        </View>
        <View style={{position: 'absolute', right: 5}}>
          <TouchableOpacity
            onPress={() => {
              setIndex(index + 1);
              setPercent((days[index + 1] * 100) / 40);
            }}
            style={styles.btn2}>
            <View style={styles.weekDay}>
              <Text style={styles.index}>{days[index + 2]}</Text>
              <View>
                <Text style={styles.day}>Долоо хоног</Text>
              </View>
            </View>
            <Icon
              size={wp('8%')}
              name={'ios-arrow-forward'}
              color="#9E9898"></Icon>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginLeft: wp('4%'), marginTop: wp('-4%')}}>
        <Text style={styles.week}>{days[index + 1]} долоо хоног</Text>
      </View>
    </View>
  );
};

export default ArrowButton;

const styles = StyleSheet.create({
  container: {
    marginTop: wp('2%'),
    flexDirection: 'row',
    marginBottom: wp('3%'),
  },
  btn1: {
    marginTop: wp('1%'),
    flexDirection: 'row',
    width: wp('25%'),
  },
  btn2: {
    marginTop: wp('1%'),
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('25%'),
  },
  day: {
    color: '#9E9898',
    fontSize: 8,
  },
  container2: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('-18%'),
    width: wp('50%'),
    height: wp('50%'),
  },
  day2: {
    fontSize: wp('19%'),
    color: 'white',
    opacity: 0.7,
  },
  week: {
    fontSize: 12,
    color: '#9E9898',
  },
  index: {
    fontSize: 12,
    color: '#9E9898',
    marginHorizontal: wp('1%'),
  },
  weekDay: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
