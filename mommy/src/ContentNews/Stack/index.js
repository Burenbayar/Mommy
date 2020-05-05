import React, {Component} from 'react';
import ContentNews from '../../ContentNews';
import {createAppContainer} from 'react-navigation';

import {createStackNavigator} from '@react-navigation/stack';
import SeeMore from '../SeeMore';
import Navigate from '../Navigate';

export const StackNavigator = createStackNavigator({
  ContentNews: {
    screen: ContentNews,
  },
  SeeMore: {
    screen: SeeMore,
  },
});
export default AppNavigator = createAppContainer(StackNavigator);
