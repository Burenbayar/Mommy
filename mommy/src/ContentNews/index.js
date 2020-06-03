import React, {Component} from 'react';
import newsJson from '../ContentNews/News/newsJson';
import {View, Text, ScrollView, Animated} from 'react-native';
import Header from './Header';
import News from './News';
import ArrowButton from './ArrowButton';
import SaveModal from './SaveModal';
import axios from 'axios';

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
    for (let index = 1; index < 42; index++) {
      this.state.days.push(index);
    }
    fetch('https://jsonplaceholder.typicode.com/users#')
      .then((response) => response.json())
      .then((json) => {
        console.warn(json);
      })
      .catch(function (error) {
        console.log(
          'There has been a problem with your fetch operation: ' +
            error.message,
        );
        // ADD THIS THROW error
        throw error;
      });

    // this.getApiData();
  }
  // async getApiData() {
  //   let resp = await axios.get('https://jsonplaceholder.typicode.com/users#');
  //   console.warn(resp.data);
  //   this.setState({items: resp.data});
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/users#')
  //     .then((response) => console.warn(response))
  //     .catch((err) => console.warn(err));
  // }
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{backgroundColor: '#F4F4F4', flex: 1}}>
          <Header
            navigation={this.props.navigation}
            searchText={this.state.searchText}
            onSearchChangeText={(text) => this.setState({searchText: text})}
          />
          {/* <View>
            {this.state.items.map((e) => {
              <Text>{e.name}</Text>;
            })}
          </View> */}
          <ArrowButton index={this.state.index} days={this.state.days} />
          <News
            navigation={this.props.navigation}
            newsCheck={true}
            items={newsJson}
            data={this.state.searchText}
          />
        </View>
      </ScrollView>
    );
  }
}

export default ContentNews;
