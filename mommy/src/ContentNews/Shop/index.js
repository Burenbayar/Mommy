import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Shop extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 40}}>Shop screen</Text>
      </View>
    );
  }
}
export default Shop;
