import React, {Component} from 'react';
import {Image, View, StyleSheet, Slider, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const ArrowButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon size={wp('6.4%')} name={'ios-arrow-back'} color="#707070"></Icon>
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon
          size={wp('6.4%')}
          name={'ios-arrow-forward'}
          color="#707070"></Icon>
      </TouchableOpacity>
    </View>
  );
};

export default ArrowButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
