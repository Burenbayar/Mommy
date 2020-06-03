import React from 'react';
import { Text, View,
  StyleSheet,
  TouchableOpacity, } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Maticon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation'; 
import HospitalComponent from '../HospitalComponent';
import SpecialNum1 from '../SpecialNum';
import {createStackNavigator} from 'react-navigation-stack';
import BaiguulgaPro from '../BaiguulgaPro';

const Tab = createMaterialTopTabNavigator({
  Home: HospitalComponent,

  Child: HospitalComponent,

  SpecialNum: SpecialNum1,
},
  {
    initialRouteName:'Home',
  },
);
const StackNavigator = createStackNavigator({
  Lavlah: Tab,
  Profile: BaiguulgaPro, 
}) 
const AppNavigator = createAppContainer(StackNavigator);

export default function App() {
  return (
    <AppNavigator/>
  );
}