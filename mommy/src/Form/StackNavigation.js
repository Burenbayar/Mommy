import React from 'react';
// import {createStackNavigation} from '@react-navigation/stack';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Form from './index';
import Delger from './Delger';
import More from './Tugeemel/More';
import Search from './Search';
import Result from './Search/result';

const HomeStack = createStackNavigator({
  Form: {
    screen: Form,
    navigationOptions: {
      header: false,
    },
  },

  Delger: {
    screen: Delger,
    navigationOptions: {
      header: false,
    },
  },
  More: {
    screen: More,
    navigationOptions: {
      // header: false,
      //headerTitleAlign: 'center',
    },
  },
  Search: {
    screen: Search,
    navigationOptions: {
      header: false,
    },
  },
  Result: {
    screen: Result,
    navigationOptions: {
      header: false,
    },
  },
});

const AppNavigator = createAppContainer(HomeStack);

const StackNavigation = () => {
  return <AppNavigator />;
};
export default StackNavigation;
