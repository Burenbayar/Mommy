import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  ImageBackground,
  Text,
} from 'react-native';

const cards = require('./TestDB');

class Cat extends Component {
  _renderitem(item) {
    return (
      //<ImageBackground
      //   source={'props.backImage'}
      //   style={[styles.backImage, {height: 180, width: 120}]}
      //   imageStyle={{borderRadius: 8}}>
      <ImageBackground
        style={{
          height: 180,
          width: 120,
          marginHorizontal: 5,
          borderWidth: 1,
          borderColor: 'blue',
        }}
        imageStyle={{borderRadius: 8}}
        source={{uri: item.image}}>
        <Text style={{fontSize: 15, color: 'green'}}>
          {item.key + ' ' + item.name}
        </Text>
      </ImageBackground>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.key.toString()}
          data={cards}
          renderItem={({item}) => this._renderitem(item)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: '1%',
    backgroundColor: 'gray',
  },
});

export default Cat;
