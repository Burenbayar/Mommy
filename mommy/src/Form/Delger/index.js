import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Pro} from '../../Common/story';
import Action from './Action';
import Comment from '../Comment';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DelgerImage from './DelgerImage';
import WriteComment from '../Comment/WriteComment';

const {width} = Dimensions.get('window');
const SIZE = width - 16;

//const obj = require('../DB');
const db = require('../Comment/commentDB');

const Delger = (props) => {
  const items = props.navigation.getParam('items');
  const d = new Date(items.pDate);
  const datestring =
    d.getFullYear() +
    '.' +
    ('0' + (d.getMonth() + 1)).slice(-2) +
    '.' +
    ('0' + d.getDate()).slice(-2);

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={{flexDirection: 'row'}}>
          <Icon size={wp('7%')} name={'ios-arrow-back'} color="#9E9898"></Icon>
          <Text
            style={{
              fontSize: wp('5%'),
              marginLeft: wp('5%'),
            }}>
            Category
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.notif}>
          <Icon name="ios-notifications" size={wp('7%')} color="#9E9898"></Icon>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            // backgroundColor: 'purple',
            paddingBottom: 60,
          }}>
          <View>
            <DelgerImage image={items.backImage} />
          </View>
          <View style={{flex: 1, marginRight: 10}}>
            {/* <Profile></Profile> */}
            <View style={styles.proContainer}>
              <View style={{flexDirection: 'row'}}>
                <Pro proImage={items.proImage}></Pro>
                <View style={{flexDirection: 'column', margin: 5}}>
                  <Text style={{fontSize: wp('4%'), fontWeight: 'bold'}}>
                    {items.userName.toUpperCase()}
                  </Text>
                  <Text style={{fontSize: wp('2.5%'), color: '#7E7E7E'}}>
                    {items.memberType}
                  </Text>
                </View>
              </View>
              <View>
                <Icon name="ios-more" size={25} color="#7E7E7E"></Icon>
              </View>
            </View>
            <View style={{paddingRight: 5}}>
              <Text
                style={{
                  fontSize: wp('3.6%'),
                  marginLeft: 10,
                  fontWeight: 'bold',
                }}>
                {items.title}
              </Text>
              <Text style={{fontSize: wp('3.6%'), marginLeft: 10}}>
                {items.question}
              </Text>
            </View>
            <Action date={datestring} commentQuantity={items.commentQuantity} />
          </View>
          <View
            style={{
              width: '94%',
              marginHorizontal: '1.5%',
              borderWidth: 1,
              borderRadius: 2,
              borderColor: '#E2E2E2',
            }}
          />
          <View style={styles.comm}>
            {db.map((e, i) => (
              <Comment
                proImage={e.proImage}
                userName={e.userName}
                answer={e.answer}
                data={e.data}
              />
            ))}
          </View>
        </ScrollView>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            //backgroundColor: 'yellow',
            width: '100%',
            position: 'absolute',
            bottom: 0,
          }}>
          <WriteComment />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '93%',
    marginVertical: hp('2%'),
    justifyContent: 'space-between',
    //marginHorizontal: wp('8%'),
    alignItems: 'center',
    alignSelf: 'center',
    // backgroundColor: 'gray',
  },
  notif: {
    //backgroundColor: 'green',
    width: '7%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal: 5,
    flex: 1,
    borderRadius: 8,
    overflow: 'hidden',
  },
  proContainer: {
    width: wp('95%'),
    height: 50,
    //backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    //alignSelf: 'center',
    paddingRight: 10,
  },
  backImage: {
    borderRadius: 8,
    resizeMode: 'cover',
    width: SIZE,
    height: 250,
  },
  comm: {
    // backgroundColor: 'yellow',
  },
});

export default Delger;
