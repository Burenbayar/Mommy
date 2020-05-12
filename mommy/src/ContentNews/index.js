import React, {Component} from 'react';
import {
  Image,
  View,
  StyleSheet,
  Slider,
  Text,
  TouchableOpacity,
} from 'react-native';
import Header from './Header';
import News from './News';
import Navigate from './Navigate';
import ArrowButton from './ArrowButton';

class ContentNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }
  render() {
    return (
      <View style={{backgroundColor: '#F4F4F4'}}>
        <Header
          navigation={this.props.navigation}
          searchText={this.state.searchText}
          onSearchChangeText={(text) => this.setState({searchText: text})}
        />
        <ArrowButton />
        <News data={this.state.searchText} navigation={this.props.navigation} />
      </View>
    );
  }
}

export default ContentNews;
