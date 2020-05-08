import React, {Component} from 'react';
import {View, StyleSheet, FlatList, Image, Text} from 'react-native';
import Story from './story';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const obj = require('./DB');
const cards = require('./TestDB');

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
          <TouchableWithoutFeedback>
            <Text style={[styles.text, {fontSize: 10}]}>More</Text>
          </TouchableWithoutFeedback>
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
    flexDirection: 'row',
    //padding: '2%',
    paddingHorizontal: 10,
    paddingVertical: 15,
    justifyContent: 'space-between',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 12,
    opacity: 0.3,
  },
});

export default Category;
