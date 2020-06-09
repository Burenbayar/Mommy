import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import Maticon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Json from './json';

class hospitalInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>HospitalInfo screen</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BackImg: {
    width: wp('100%'),
    height: wp('55.7%'),
  },
  back: {
    position: 'absolute',
    left: 0,
    marginLeft: wp('4%'),
    marginTop: wp('3%'),
  },
  bell: {
    position: 'absolute',
    right: 0,
    marginRight: wp('4%'),
    marginTop: wp('3%'),
  },
  PImg: {
    justifyContent: 'center',
  },
  Body: {
    backgroundColor: 'white',
    borderRadius: 20,
  },
  Data: {
    borderBottomWidth: 1,
  },
});

export default hospitalInfo;
