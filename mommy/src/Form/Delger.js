import React from 'react';
import {View, StyleSheet, Image, Text, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Pro} from './story';
import Action from './Action';
import test from './images/testBack.jpg';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Animated from 'react-native-reanimated';
import {PinchGesturehandler} from 'react-native-gesture-handler';
import DelgerImage from './DelgerImage';
const {width} = Dimensions.get('window');
const SIZE = width - 16;

const obj = require('./DB');

const Delger = (props) => {
  return (
    <View style={styles.container}>
      <DelgerImage />
      <View style={{flex: 1}}>
        {/* <Profile></Profile> */}
        <View style={styles.proContainer}>
          <View style={{flexDirection: 'row'}}>
            <Pro proImage={obj[0].proImage}></Pro>
            <View style={{flexDirection: 'column', margin: 5}}>
              <Text style={{fontSize: wp('4%'), fontWeight: 'bold'}}>
                {obj[0].userName.toUpperCase()}
              </Text>
              <Text style={{fontSize: wp('2.5%'), color: '#7E7E7E'}}>
                {obj[0].memberType}
              </Text>
            </View>
          </View>
          <View>
            <Icon name="ios-more" size={25} color="#7E7E7E"></Icon>
          </View>
        </View>
        <Text style={{fontSize: wp('3.6%'), marginLeft: 10}}>
          {obj[0].question}
        </Text>
        <Action pDate="2020.04.01" commentQuantity={841} />
        {/* <View>
          <Comment></Comment>
          <WriteComment></WriteComment>
        </View> */}
      </View>
      <View
        style={{
          width: wp('95%'),
          //marginLeft: wp('1%'),
          alignSelf: 'center',
          borderWidth: 1,
          borderRadius: 2,
          borderColor: '#E2E2E2',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    margin: 5,
    marginRight: 8,
    flex: 1,
    borderRadius: 8,
    overflow: 'hidden',
    //height: hp('70%'),
  },
  proContainer: {
    width: wp('95%'),
    height: 50,
    //backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    paddingRight: 10,
  },
  backImage: {
    borderRadius: 8,
    resizeMode: 'cover',
    width: SIZE,
    height: 250,
  },
});

export default Delger;
