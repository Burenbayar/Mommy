import React, {Component, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal';
const SaveModal = (props) => {
  return (
    <Modal
      animationIn={'fadeIn'}
      transparent={true}
      isVisible={props.isModalVisible}>
      <View
        style={{
          borderRadius: 10,
          backgroundColor: 'white',
          margin: wp('1%'),
          height: hp('30%'),
        }}>
        <Text style={{textAlign: 'center', fontSize: 22}}>Хадгалах</Text>
        <Text style={{textAlign: 'center', marginBottom: wp('20%')}}>
          Мэдээлэл амжилттай хадгалагдлаа
        </Text>
        <View style={styles.MainContainer}>
          <TouchableOpacity
            onPress={props.handleModal}
            activeOpacity={0.5}
            style={{width: '80%'}}>
            <LinearGradient
              colors={['#F36227', '#EE227C']}
              style={styles.LinearGradientStyle}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0.9}}
              locations={[0, 1]}>
              <Text style={styles.buttonText}>ГАРАХ</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
export default SaveModal;
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  LinearGradientStyle: {
    height: hp('7%'),
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 14,
    color: '#fff',
    backgroundColor: 'transparent',
  },
});
