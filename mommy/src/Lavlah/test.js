import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Maticon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


import HospitalComponent from './HospitalComponent';
import SpecialNum1 from './SpecialNum';

const Width = Dimensions.get('window').width;
const tabBarWidth = Width - 145; 
const TabScreen = createMaterialTopTabNavigator(
  {
    Тусгай: { screen: SpecialNum1 },
    Эмнэлэг: { screen: HospitalComponent },
    Хүүхэд: { screen: HospitalComponent },

  },
  {
    swipeEnabled: true,
        animationEnabled:false ,
        tabBarOptions: {
            activeTintColor: "#000000",
            inactiveTintColor: "#000000",
            upperCaseLabel: false,
            scrollEnabled: false,
            inactiveBackgroundColor: "white",
            indicatorStyle: {
                height: 30,
                top: 0,
                backgroundColor: '#FFFFFF',
                borderRadius:20,
            },
            style: {
                marginLeft: 15,
                marginRight:15,
                borderWidth: 1,
                borderRadius: 20,
                height: 30,
                borderColor: "#F4F4F4",
                backgroundColor: "#F4F4F4",
                elevation: 0,
            },
            tabStyle: {
                justifyContent: "center",
                width: tabBarWidth/2
            },
            labelStyle: {
                marginTop: -14
            }
    },
  }
);

const App = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#F4F4F4',
        elevation: 0,
      },
      headerTintColor: '#000000',
      title: 'Лавлах',
      headerRight: () => (
        <TouchableOpacity style={styles.bell}>
          <Maticon size={wp('6%')} name={'bell'} color="grey"/>
        </TouchableOpacity>
      ),
      headerLeft: () => (
        <TouchableOpacity style={styles.back}>
          <Icon size={wp('7%')} name={'ios-arrow-back'} color="grey"/>
        </TouchableOpacity>
      ),
    },
  },
});
const styles = StyleSheet.create({
  back:{
    marginLeft: wp('4%'),
  },
  bell:{
    marginRight: wp('4%'),
  }
})

export default createAppContainer(App);