import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Pro} from '../BackUp/story';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Like from '../../Common/Like';

const db = require('./commentDB');

const data = {
  clicked: 0, // 0 =no clicked, -1 , 1 liked
  like: 88,
  dislike: 2,
};

const Comment = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.proView}>
        <Pro proImage={props.proImage} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{props.userName}</Text>
        <Text style={styles.answer}>{props.answer}</Text>
        <View
          style={{
            marginTop: 10,
            width: 80,
            // height: 50,
            //backgroundColor: 'black',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flex: 1,
          }}>
          <Like size={14} info={props.data} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp('94%'),
    backgroundColor: 'transparent',
    flexDirection: 'row',
    marginTop: 10,
  },
  textContainer: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: '#F4F4F4',
    borderRadius: 8,
    flex: 1,
  },
  name: {
    fontSize: wp('3.6%'),
    fontWeight: 'bold',
  },
  proView: {
    //marginLeft: wp('1%'),
    alignItems: 'center',
    //backgroundColor: 'red',
  },
});

export default Comment;
