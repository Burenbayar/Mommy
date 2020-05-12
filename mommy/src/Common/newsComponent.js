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
import Like from './Like';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class News extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    this.setState({items: newsJson});
  }
  handleHeart = (itemID) =>{
    let item = this.state.items;
    item[itemID].heart = !item[itemID].heart;
    this.setState({items: item});
  }


  renderItem = ({item}) => {
    return (
      <View style={styles.container} key={item.id}>
        <View style={styles.First}>
          <Image style={styles.first1} source={item.Pimage}/>
          <View style={styles.first2}>
            <View>
              <Text style={styles.nameText}>
                {item.name}
              </Text>
            </View>
            <View>
              <Text style={styles.posText}>
                {item.pos}
              </Text>
            </View>
          </View>
          <View >
            <Eicon name='dots-three-horizontal' size={23} color="grey" />
          </View>
        </View>
        <Image style={styles.contentImg} source={item.Cimage}/>
        <View style={styles.second}>
          <View style={styles.second1}>
            <View style={styles.titleView}>
              <Text style={styles.titletext}>
                {item.title}
              </Text>
            </View>
            <View style={styles.second1mar}>
              <TouchableOpacity onPress={() => this.handleHeart(item.id)
              }>
                <View>
                {item.heart ? (<Ionicon name='md-heart' size={18} color='red'/>):(<Ionicon name='md-heart' size={18} color='grey'/>) }
                </View>
                
              </TouchableOpacity>
            </View>
            <View style={styles.second1mar}>
              <Maticon name='comment-text' size={18} color="grey" />
            </View>
            <View style={styles.second1mar}>
              <Text style={styles.second1Text}>
                {item.commentNum}
              </Text>
            </View>
          </View>
          <View style={styles.second2}>
            <Like/>
            <View style={styles.dateView}>
              <Text style={styles.second2Text}>
                {item.date}
              </Text>
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

export default News;

const styles = StyleSheet.create({
  container: {
    margin: wp('2.4%'),
    backgroundColor: '#FFFFFF',
    borderRadius: wp('3.7%'),
    height: hp('32%'),
    width: wp('95.2%')
  },
  First:{
    flexDirection: 'row',
  },
  first1:{
    width: wp('8%'),
    height: wp('8%'),
    borderRadius: wp('4%'),
    marginHorizontal: wp('2.6%'),
    marginVertical: hp('0.5%')
  },
  first2:{
    width: wp('72%'),
    height: '100%',
    flexDirection: 'column',
    marginTop: hp('0.5%')
  },
  nameText:{
    fontSize: 13,
    fontWeight: 'bold',
  },
  posText:{
    fontSize: 9,
    marginTop: hp('-0.5%'),
  },

  contentImg:{
    width: '100%',
    height: hp('19%'),
  },
  second:{
    flexDirection: 'column',
  },
  second1:{
    flexDirection: 'row',
  },
  second1Text:{
    fontSize: 9,
    marginLeft: wp('0.2%'),
    marginTop: hp('0.2%')
  },
  second1mar:{
    margin: wp('1%'),
  },
  titletext:{
    fontSize: 13,
  },
  titleView:{
    width: wp('70%'),
    marginLeft: wp('2.6%'),
  },
  second2:{
    flexDirection: 'row',
    marginTop: hp('-0.2%'),
    marginLeft: wp('3%')
  },
  second2Text:{
    fontSize: 8,
    marginLeft: wp('3%'),
  },
  dateView:{
    marginLeft: wp('55%')
  },
});