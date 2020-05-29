import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Text,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconDot from 'react-native-vector-icons/Entypo';
import Maticon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Survey from './Survey';
import Like from '../../Common/Like';
const data = {clicked: 0, like: 1000, dislike: 999};
class SeeMore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.navigation.getParam('data'),
    };
  }
  render() {
    return (
      <View>
        <ImageBackground
          style={{width: '100%', height: hp('31%')}}
          source={this.state.data.image}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icon
                size={wp('8%')}
                name={'ios-arrow-back'}
                color="white"></Icon>
            </TouchableOpacity>
            <TouchableOpacity style={styles.heart}>
              <View>
                {this.state.data.heart ? (
                  <Icon name="md-heart" size={wp('7%')} color="#FA3D5A"></Icon>
                ) : (
                  <Icon name="md-heart" size={wp('7%')} color="#9B9191"></Icon>
                )}
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}>
          <View style={styles.textContainer}>
            <View style={styles.text}>
              <View>
                <Text style={styles.name}>{this.state.data.newsTitle}</Text>
                <Text style={styles.date}>{this.state.data.newsDate}</Text>
              </View>
              <TouchableOpacity style={styles.dots}>
                <View>
                  <IconDot
                    name="dots-three-horizontal"
                    size={wp('7%')}
                    color="#707070"></IconDot>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.content}>
              <Text style={styles.name}>{this.state.data.newsBody}</Text>
            </View>
          </View>
          <View style={styles.rateContainer}>
            <Text style={{color: '#9E9898', fontSize: wp('3.5%')}}>
              Үнэлгээ өгөх
            </Text>
            <View
              style={{
                alignSelf: 'flex-end',
                marginLeft: '40%',
                marginTop: '3%',
              }}>
              <Like size={21} info={data} />
            </View>
          </View>
          <View style={styles.surveyContainer}>
            <Survey />
          </View>
          <View style={styles.sameContainer}>
            <Image
              style={styles.sameImage}
              source={this.state.data.image}></Image>
            <View style={styles.sameContent}>
              <View style={styles.sameTitle}>
                <Text style={styles.name}>{this.state.data.newsTitle}</Text>
                <Text style={styles.date}>{this.state.data.newsDate}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View>
                  <Like size={14} info={data} />
                </View>
                <TouchableOpacity style={styles.heart}>
                  <View>
                    <Icon name="md-heart" size={25} color="#9B9191"></Icon>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default SeeMore;

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: wp('5%'),
    paddingTop: wp('5%'),
  },
  surveyContainer: {
    marginTop: wp('2.5%'),
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: wp('5%'),
    paddingTop: wp('5%'),
  },
  sameContainer: {
    marginTop: wp('2.5%'),
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    flexDirection: 'row',
    height: hp('14%'),
  },
  rateContainer: {
    marginTop: wp('2.5%'),
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('5%'),
    paddingVertical: wp('2%'),
  },
  header: {
    flexDirection: 'row',
    marginTop: hp('4%'),
    marginHorizontal: wp('4%'),
  },
  content: {
    marginVertical: wp('4%'),
  },
  text: {
    flexDirection: 'row',
  },
  dots: {
    position: 'absolute',
    right: wp('-2%'),
    marginTop: hp('-2%'),
  },
  name: {
    fontSize: wp('3.5%'),
    fontFamily: 'Cochin',
  },
  heart: {
    position: 'absolute',
    right: 0,
    alignSelf: 'flex-end',
  },
  date: {
    fontSize: wp('3%'),
    color: '#9E9898',
  },
  sameImage: {
    width: wp('24%'),
    height: hp('13%'),
    alignItems: 'center',
    borderRadius: 10,
    margin: wp('1%'),
  },
  sameTitle: {
    flexDirection: 'column',
    paddingTop: '3%',
    height: '90%',
    width: '80%',
  },
  sameContent: {
    flexDirection: 'column',
    // backgroundColor: 'grey',
    width: '70%',
    height: '100%',
  },
  scrollView: {
    margin: wp('2.4%'),
    marginTop: hp('-40%'),
    paddingTop: 230,
    borderRadius: 10,
  },
});
