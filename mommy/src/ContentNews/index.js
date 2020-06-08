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
      searchText: '',
      index: 1,
      isLoading: false,
      days: [],
      items: newsJson,
    };
    // this.getApiData(2);
  }
  componentDidMount() {
    for (let i = 0; i < 42; i++) {
      this.state.days.push(i);
    }
    // let items = [];
    // fetch('http://192.168.100.243:8082/mama/maNews/10')
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.warn(json);
    //     this.setState({items: json.entity});
    //   })
    //   .catch(function (error) {
    //     console.log(
    //       'There has been a problem with your fetch operation: ' +
    //         error.message,
    //     );
    //     // ADD THIS THROW error`
    //     throw error;
    //   });

    // this.getApiData();
  }
  // async getApiData(id) {
  //   let resp = await axios.get(
  //     `http://192.168.100.243:8082/mama/maNews/week/${id}`,
  //   );
  //   console.warn(resp.data.entity);
  //   let data = resp.data.entity;
  //   this.setState({items: data});
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
          <ArrowButton
            getData={this.getApiData}
            index={this.state.index}
            days={this.state.days}
          />
          {this.state.items && (
            <News
              navigation={this.props.navigation}
              newsCheck={true}
              items={this.state.items}
              data={this.state.searchText}
            />
          )}
        </View>
      </ScrollView>
    );
  }
}

export default ContentNews;
