import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  FlatList,
  Image,
} from 'react-native';
import newsJson from './newsJson';
import Eicon from 'react-native-vector-icons/Entypo';
import Maticon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
<<<<<<< HEAD:mommy/src/Common/NewsComponent/index.js
import Like from '../Like';
=======
import Like from '../Like'
>>>>>>> bdc7c00669099fe609cef649c46b33a07d634e78:mommy/src/Common/NewsComponent/newsComponent.js
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class NewsComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    this.setState({items: newsJson});
  }
  handleHeart = (itemID) => {
    let item = this.state.items;
    item[itemID].heart = !item[itemID].heart;
    this.setState({items: item});
  };

  renderItem = ({item}) => {
    return (
      <View style={styles.container} key={item.id}>
        <View style={styles.First}>
          <Image style={styles.first1} source={item.Pimage} />
          <View style={styles.first2}>
            <View>
              <Text style={styles.nameText}>{item.name}</Text>
            </View>
            <View>
              <Text style={styles.posText}>{item.pos}</Text>
            </View>
          </View>
          <View>
            <Eicon name="dots-three-horizontal" size={23} color="grey" />
          </View>
        </View>
        <Image style={styles.contentImg} source={item.Cimage} />
        <View style={styles.second}>
          <View style={styles.second1}>
            <View style={styles.titleView}>
              <Text style={styles.titletext}>{item.title}</Text>
            </View>
            <View style={styles.second1mar}>
              <TouchableOpacity onPress={() => this.handleHeart(item.id)}>
                <View>
<<<<<<< HEAD:mommy/src/Common/NewsComponent/index.js
                  {item.heart ? (
                    <Ionicon name="md-heart" size={16} color="red" />
                  ) : (
                    <Ionicon name="md-heart" size={16} color="grey" />
                  )}
=======
                {item.heart ? (<Ionicon name='md-heart' size={18} color='red'/>):(<Ionicon name='md-heart' size={18} color='grey'/>) }
>>>>>>> bdc7c00669099fe609cef649c46b33a07d634e78:mommy/src/Common/NewsComponent/newsComponent.js
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.second1mar}>
<<<<<<< HEAD:mommy/src/Common/NewsComponent/index.js
              <Maticon name="comment-text" size={16} color="grey" />
=======
              <Maticon name='comment-text' size={18} color="grey" />
>>>>>>> bdc7c00669099fe609cef649c46b33a07d634e78:mommy/src/Common/NewsComponent/newsComponent.js
            </View>
            <View style={styles.second1mar}>
              <Text style={styles.second1Text}>{item.commentNum}</Text>
            </View>
          </View>
          <View style={styles.second2}>
<<<<<<< HEAD:mommy/src/Common/NewsComponent/index.js
            <Like />
            <View style={styles.commView}>
              <Text style={styles.second2Text}>{item.date}</Text>
=======
            <Like/>
            <View style={styles.dateView}>
              <Text style={styles.second2Text}>
                {item.date}
              </Text>
>>>>>>> bdc7c00669099fe609cef649c46b33a07d634e78:mommy/src/Common/NewsComponent/newsComponent.js
            </View>
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <ScrollView>
        <View>
          <FlatList
            keyExtractor={(item) => item.id}
            data={this.state.items}
            renderItem={this.renderItem}
            maxHeight={2000}
            marginBottom={70}
          />
        </View>
      </ScrollView>
    );
  }
}

export default NewsComponent;

const styles = StyleSheet.create({
  container: {
    margin: wp('2.4%'),
    backgroundColor: '#FFFFFF',
    borderRadius: wp('3.7%'),
    height: hp('32%'),
    width: wp('95.2%'),
  },
  First: {
    flexDirection: 'row',
  },
  first1: {
    width: wp('8%'),
    height: wp('8%'),
    borderRadius: wp('4%'),
    marginHorizontal: wp('2.6%'),
    marginVertical: hp('0.5%'),
  },
  first2: {
    width: wp('72%'),
    height: '100%',
    flexDirection: 'column',
    marginTop: hp('0.5%'),
  },
  nameText: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  posText: {
    fontSize: 9,
    marginTop: hp('-0.5%'),
  },

  contentImg: {
    width: '100%',
    height: hp('19%'),
  },
  second: {
    flexDirection: 'column',
  },
  second1: {
    flexDirection: 'row',
  },
  second1Text: {
    fontSize: 9,
    marginLeft: wp('0.2%'),
    marginTop: hp('0.2%'),
  },
  second1mar: {
    margin: wp('1%'),
  },
  titletext: {
    fontSize: 13,
  },
  titleView: {
    width: wp('70%'),
    marginLeft: wp('2.6%'),
  },
  second2: {
    flexDirection: 'row',
<<<<<<< HEAD:mommy/src/Common/NewsComponent/index.js
    marginTop: hp('-0.5%'),
=======
    marginTop: hp('-0.2%'),
    marginLeft: wp('3%')
>>>>>>> bdc7c00669099fe609cef649c46b33a07d634e78:mommy/src/Common/NewsComponent/newsComponent.js
  },
  second2Text: {
    fontSize: 8,
    marginLeft: wp('3%'),
  },
<<<<<<< HEAD:mommy/src/Common/NewsComponent/index.js
  commView: {
    marginLeft: wp('50%'),
=======
  dateView:{
    marginLeft: wp('55%')
>>>>>>> bdc7c00669099fe609cef649c46b33a07d634e78:mommy/src/Common/NewsComponent/newsComponent.js
  },
});
