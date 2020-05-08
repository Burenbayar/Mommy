import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Text,
  FlatList,
} from 'react-native';

class SeeMore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.navigation.getParam('data'),
    };
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{fontSize: 40}}>{this.state.data.name}</Text>
      </View>
    );
  }
}

export default SeeMore;
