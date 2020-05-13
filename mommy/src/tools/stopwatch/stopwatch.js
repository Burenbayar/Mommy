import React, {Component} from 'react';
import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Text,
} from 'react-native';

import StopwatchContainer from './stopwatch.container';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { container, title} = styles;
    return (
      <View style={container}>
        <Text style={title}>Welcome to Codersera</Text>
        <StopwatchContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#DBD053',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '8%',
  },
  title: {
    fontSize: 30,
    color: '#74526C',
    marginBottom: '8%',
  },
});
