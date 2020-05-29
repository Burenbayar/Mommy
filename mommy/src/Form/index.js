import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Bugd from './Bugd';
import Tugeemel from './Tugeemel';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Ficon from 'react-native-vector-icons/Feather';
import {createStackNavigator} from 'react-navigation-stack';
const Tab = createMaterialTopTabNavigator(
  {
    Бүгд: {
      screen: (props) => <Bugd navigation={props.screenProps.navigation} />,
    },
    Түгээмэл: {
      screen: (props) => <Tugeemel navigation={props.screenProps.navigation} />,
    },
    Огт_хариулаагүй: {
      screen: (props) => <Bugd navigation={props.screenProps.navigation} />,
      navigationOptions: {
        tabBarLabel: 'Огт хариулаагүй',
      },
    },
  },
  {
    initialRouteName: 'Бүгд',
    swipeEnabled: false, // eniig yaahaa shiid
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: '#BEB5B5',
      upperCaseLabel: false,
      style: {
        backgroundColor: 'transparent',
        //backgroundColor: 'red',
        marginTop: -8,
      },
      labelStyle: {
        fontSize: 12, //eniig response bolgono
      },
      indicatorStyle: {
        width: wp('28%'),
        margin: wp('3%'),
        backgroundColor: '#BEB5B5',
        height: hp('4%'),
        top: 0,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
      },
    },
  },
);

const App = createStackNavigator({
  TabScreen: {
    screen: Tab,
    navigationOptions: ({screenProps}) => ({
      headerStyle: {
        backgroundColor: 'transparent',
        elevation: 0,
      },
      headerTintColor: 'black',
      title: 'ФОРУМ',

      headerTitleStyle: {
        marginLeft: -30,
        fontWeight: 'bold',
      },
      headerLeft: () => (
        <TouchableOpacity
          style={{width: wp('10%')}}
          onPress={() => screenProps.navigation.goBack()}>
          <Icon
            style={{marginLeft: 18}}
            name="ios-arrow-back"
            color="#00000050"
            size={30}
          />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: wp('17%'),
          }}>
          <TouchableOpacity
            //style={{backgroundColor: 'red'}}
            onPress={() => {
              //alert(this.state.showSearch);
              screenProps.navigation.navigate('Search');
            }}>
            <Ficon name="search" size={wp('6%')} color="#9E9898"></Ficon>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => screenProps.navigation.goBack()}>
            <Icon
              style={{marginRight: 20}}
              name="ios-notifications"
              color="#00000050"
              size={26}
            />
          </TouchableOpacity>
        </View>
      ),
    }),
  },
});

const AppNavigator = createAppContainer(App);

class Form extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <AppNavigator screenProps={{navigation: this.props.navigation}} />;
  }
}

export default Form;
