import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import beltgelJson from './beltgelJson';

export default class BeltgelScreen extends React.Component {
  constructor() {
    super();
  }

  renderItem = ({item}) => {
    return (
      <View style={{flex: 1, flexDirection: 'row', marginBottom: 3}}>
        <Image source= {{uri: item.image}}
          style={{width: 80, height: 80, margin: 5}} 
        />
        <View style={{flex: 1, justifyContent: 'center', marginLeft: 5}}>
          <Text style={{fontsize: 18, color: 'green', marginBottom: 15}}>
            {item.news_title}
          </Text>
          <Text style={{fontSize: 16, color: 'red'}}>{item.author}</Text>
        </View>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList data={beltgelJson} renderItem={this.renderItem} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
});
