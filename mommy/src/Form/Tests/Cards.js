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

class Cards extends Component {
  _renderitem(item) {
    return (
      //<ImageBackground
      //   source={'props.backImage'}
      //   style={[styles.backImage, {height: 180, width: 120}]}
      //   imageStyle={{borderRadius: 8}}>
      <ImageBackground
        //source={'props.backImage'}
        style={[{height: 180, width: 120, marginHorizontal: 5}]}
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

// const styles = StyleSheet.create({
//   containerReal: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     // height: hp('35%'),
//     // width: wp('40%'),
//     // borderRadius: 8,
//     // overflow: 'hidden',
//     //backgroundColor: 'yellow',
//     marginBottom: '1.5%',
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'space-between',
//     // height: hp('35%'),
//     // width: wp('46%'),
//     borderRadius: 8,
//     overflow: 'hidden',
//     // backgroundColor: 'red',
//     // margin: '1%',
//   },
//   backImage: {
//     // backgroundColor: 'blue',
//     // height: hp('35%'),
//     // width: wp('46%'),
//     // borderRadius: 8,
//     // overflow: 'hidden',
//     flex: 1,
//     margin: '1%',
//   },
//   pro: {
//     margin: '4%',
//     borderRadius: 50,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: 34,
//     height: 34,
//   },
//   proImage: {
//     width: 30,
//     height: 30,
//   },
//   min: {
//     fontSize: 12,
//     marginBottom: '1%',
//     color: 'white',
//   },
//   title: {color: 'white', fontSize: 17},
// });

export default Cards;
