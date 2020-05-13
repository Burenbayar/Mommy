import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Text,
  TouchableNativeFeedback,
} from 'react-native';
import Story from './story';
import Icon from 'react-native-vector-icons/Ionicons';

const obj = require('./DB');

class Category extends Component {
  constructor(props) {
    super(props);
  }
  _renderitem(item) {
    return (
      <Story
        mini={true}
        title={item.title}
        pDate={item.pDate}
        proImage={item.proImage}
        backImage={item.backImage}
        userId={item.userId}
        nothing={false}
      />
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.text}>{this.props.title.toUpperCase()}</Text>
          <View
            style={{
              overflow: 'hidden',
              width: 50,
              height: 26,
              borderRadius: 10,
            }}>
            <TouchableNativeFeedback
              onPress={() => alert('byee')}
              background={TouchableNativeFeedback.Ripple('#5F5F5F')}>
              <View
                style={{
                  flexDirection: 'row',
                  width: 50,
                  height: 26,
                  borderRadius: 20,
                  // backgroundColor: 'yellow',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 5,
                }}>
                <Text style={[styles.text, {fontSize: 10, marginRight: 5}]}>
                  More
                </Text>
                <Icon name="ios-arrow-forward" size={18} color="#7E7E7E"></Icon>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.userId}
          data={obj}
          renderItem={({item}) => this._renderitem(item)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    width: '100%',
  },
  head: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    //padding: '2%',
    width: '100%',
    height: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 12,
    opacity: 0.3,
    marginLeft: 10,
  },
});

export default Category;
