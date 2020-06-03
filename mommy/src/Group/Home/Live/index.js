import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Live extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{fontSize: 40}}>Live Screen</Text>
      </View>
    );
  }
}
export default Live;
