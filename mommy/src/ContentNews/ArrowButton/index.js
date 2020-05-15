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
    if (percent < days[index + 1]) {
      setPercent((days[index + 1] * 100) / 40);
    }
  }, [percent]);

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={() => {
            setIndex(index - 1);
            setPercent((days[index - 1] * 100) / 40);
          }}
          style={styles.btn1}>
          <Icon size={wp('7%')} name={'ios-arrow-back'} color="#9E9898"></Icon>
          <View style={{width: 80}}>
            <Text style={styles.day}>{days[index]} Долоо хоног</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.container2}>
          <Svg viewBox="0 0 38 38">
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
              strokeDashoffset="18"
            />
            <View style={{alignItems: 'center', paddingTop: wp('8.5%')}}>
              <Text style={styles.day2}>{days[index + 1]}</Text>
              <Text style={styles.week}>Долоо хоног</Text>
            </View>
          </Svg>
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            setIndex(index + 1);
            setPercent((days[index + 1] * 100) / 40);
          }}
          style={styles.btn1}>
          <View style={{width: 80}}>
            <Text style={styles.day}>{days[index + 2]} Долоо хоног</Text>
          </View>
          <Icon
            size={wp('7%')}
            name={'ios-arrow-forward'}
            color="#9E9898"></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ArrowButton;

const styles = StyleSheet.create({
  container: {
    marginTop: 6,
    //backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  btn1: {
    marginTop: 3,
    //backgroundColor: 'yellow',
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('25%'),
  },
  day: {
    color: '#9E9898',
    fontSize: wp('3%'),
  },
  container2: {
    //backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('-17%'),
    width: wp('47%'),
    height: wp('47%'),
  },
  day2: {
    fontSize: 61,
    color: 'white',
    opacity: 0.6,
    marginBottom: 8,
  },
  week: {
    fontSize: 14,
    color: '#9E9898',
  },
});
