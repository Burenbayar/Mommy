import React, {Component} from 'react';
import {Image, View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CircleWeek from '../CircleWeek';
const ArrowButton = () => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          style={{
            marginLeft: wp('3%'),
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon size={wp('7%')} name={'ios-arrow-back'} color="#9E9898"></Icon>
          <Text style={{color: '#9E9898', fontSize: wp('4%')}}> 14</Text>
          <Text style={{color: '#9E9898', fontSize: wp('3%')}}>
            {' '}
            Долоо хоног
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginLeft: wp('41%'),
            alignItems: 'center',
          }}>
          <Text style={{color: '#9E9898', fontSize: wp('4%')}}>16 </Text>
          <Text style={{color: '#9E9898', fontSize: wp('3%')}}>
            Долоо хоног{' '}
          </Text>
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
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
});
