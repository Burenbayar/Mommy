import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';
import Maticon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TabBar from 'react-native-underline-tabbar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Lnavigation from './Lavlah/Lavlah'


class Lavlah extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
          <Icon size={wp('7%')} name={'ios-arrow-back'} color="grey"/>
          </TouchableOpacity>
          <Text style={styles.headText}>
            ЛАВЛАХ
          </Text>
          <TouchableOpacity style={styles.bell}>
          <Maticon size={wp('6%')} name={'bell'} color="grey"/>
          </TouchableOpacity>
        </View>
        <View>
          <Lnavigation/>
        </View>
      </View>
    )
  }
}

export default Lavlah;

const styles = StyleSheet.create({
  container:{
    flexDirection: 'column',
  },
  header:{
    flexDirection: 'row',
    marginTop: hp('4%'),
    marginHorizontal: wp('5%'),
    alignItems: 'center',
  },
  headText:{
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: wp('5%'),
  },
  bell:{
    position: 'absolute',
    right: 0,
  },
})
