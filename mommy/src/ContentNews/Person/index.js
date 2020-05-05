import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Person extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{fontSize: 40}}>Person screen</Text>
      </View>
    );
  }
}
export default Person;
