import React, {Component} from 'react';
import {
  ImageBackground,
  Image,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const DrawContent = (props) => {
  return (
    <View>
      <ImageBackground
        style={styles.imageBg}
        source={require('../../contentImage/child.png')}>
        <TouchableOpacity
          onPress={() => props.navigation.closeDrawer()}
          style={styles.closeBtn}>
          <Icon name="ios-arrow-back" size={30} color="white"></Icon>
        </TouchableOpacity>
        <View style={styles.profile}>
          <Image
            style={styles.profileImg}
            source={require('../../contentImage/profile.png')}></Image>
          <View style={styles.info}>
            <Text style={styles.name}>А.Ундрам</Text>
            <View style={styles.pointContainer}>
              <Text style={styles.pointText}>онооны мэдээлэл</Text>
              <View style={styles.iconContainer}>
                <MaterialIcon
                  name="heart-circle"
                  size={25}
                  color="grey"></MaterialIcon>
                <Text style={styles.number}>52,412</Text>
                <TouchableOpacity style={styles.seemoreBtn}>
                  <Icon name="ios-arrow-forward" size={23} color="grey"></Icon>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default DrawContent;

const styles = StyleSheet.create({
  imageBg: {
    height: hp('25%'),
    width: wp('70%'),
  },
  closeBtn: {
    margin: wp('5%'),
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImg: {
    width: wp('20%'),
    height: wp('20%'),
  },
  info: {
    flexDirection: 'column',
    marginLeft: wp('3%'),
    marginBottom: wp('3%'),
  },
  name: {
    color: 'white',
    fontSize: 18,
  },
  pointContainer: {
    width: wp('40%'),
    height: wp('14%'),
    backgroundColor: 'white',
    borderRadius: 30,
  },
  pointText: {
    fontSize: 10,
    color: 'grey',
    textAlign: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    marginLeft: wp('2%'),
    alignItems: 'center',
  },
  number: {
    marginLeft: wp('1%'),
    color: 'grey',
    fontSize: 18,
  },
  seemoreBtn: {
    position: 'absolute',
    right: 10,
  },
});
