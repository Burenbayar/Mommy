import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableNativeFeedback,
} from 'react-native';
import Story from '../../Common/story'; //end oorchil
import Icon from 'react-native-vector-icons/Ionicons';

const obj = require('../DB');

class Category extends Component {
  constructor(props) {
    super(props);
  }
  _renderitem(item) {
    return (
      <Story
        navigation={this.props.navigation}
        mini={true}
        //input={true}
        items={item}
      />
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.text}>{this.props.title.toUpperCase()}</Text>
          <View style={styles.moreContainer}>
            <TouchableNativeFeedback
              onPress={() => this.props.navigation.navigate('More', {obj: obj})}
              background={TouchableNativeFeedback.Ripple('#5F5F5F')}>
              <View style={styles.more}>
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
    paddingHorizontal: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 12,
    opacity: 0.3,
    marginLeft: 5,
  },
  moreContainer: {
    overflow: 'hidden',
    width: 50,
    height: 26,
    borderRadius: 10,
    //backgroundColor: 'red',
  },
  more: {
    flexDirection: 'row',
    width: 50,
    height: 26,
    borderRadius: 20,
    // backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
});

export default Category;
