import React, {Component} from 'react';
import newsJson from '../ContentNews/News/newsJson';
import {View, Text} from 'react-native';
import Header from './Header';
import News from './News';
import ArrowButton from './ArrowButton';
class ContentNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      searchText: '',
      index: 0,
      isLoading: false,
      days: [],
    };
  }
  componentDidMount() {
    for (let index = 1; index < 41; index++) {
      this.state.days.push(index);
    }
  }

  render() {
    return (
      <View style={{backgroundColor: '#F4F4F4'}}>
        <Header
          navigation={this.props.navigation}
          searchText={this.state.searchText}
          onSearchChangeText={(text) => this.setState({searchText: text})}
        />
        <ArrowButton index={this.state.index} days={this.state.days} />
        <News
          navigation={this.props.navigation}
          newsCheck={true}
          items={newsJson}
          data={this.state.searchText}
        />
      </View>
    );
  }
}

export default ContentNews;
