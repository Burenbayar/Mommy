import React, {Component} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Story from '../../Common/story';

const obj = require('../DB');

const formatData = (data) => {
  if (data.length % 2 != 0)
    data.push({
      userId: `what the hell are you ??????? blank-${Math.random() * 100 + 1}`,
      empty: true,
    });
  return data;
};

class Bugd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hailt: this.props.word,
      items: '',
    };
  }
  // async componentDidMount() {
  //   const url = 'https://jsonplaceholder.typicode.com/users#';
  //   //const url = 'http://192.168.5.94:8082/mama/maNews';
  //   await fetch(url, {
  //     method: 'GET',
  //   })
  //     .then((response) => response.json())
  //     .then((res) => {
  //       console.log(res);
  //       this.setState({items: res});
  //     })
  //     .catch((e) => console.log(e));
  // }
  render() {
    if (this.props.searching)
      return (
        <View style={styles.container}>
          <FlatList
            style={styles.container}
            numColumns={2}
            keyExtractor={(item) => item.userId}
            data={formatData(obj)}
            renderItem={({item}) => {
              if (item.empty == true) return <Story nothing={true} />;
              else {
                if (
                  item.title
                    .toLowerCase()
                    .search(this.props.word.toLowerCase()) !== -1
                ) {
                  return (
                    <Story
                      nav={this.props.navigation}
                      items={item}
                      // title={item.title}
                      // pDate={item.pDate}
                      // proImage={item.proImage}
                      // backImage={item.backImage}
                    />
                  );
                }
              }
            }}
          />
        </View>
      );
    else
      return (
        <View style={styles.container}>
          <FlatList
            style={styles.container}
            numColumns={2}
            keyExtractor={(item) => item.userId}
            data={formatData(obj)}
            renderItem={({item}) => {
              if (item.empty == true) return <Story nothing={true} />;
              return (
                <Story
                  nav={this.props.navigation}
                  items={item}
                  // title={item.title}
                  // pDate={item.pDate}
                  // proImage={item.proImage}
                  // backImage={item.backImage}
                />
              );
            }}
          />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '1%',
    backgroundColor: 'transparent',
  },
});

export default Bugd;
