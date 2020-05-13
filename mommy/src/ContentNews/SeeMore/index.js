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
import Like from './Like';
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
                size={wp('7%')}
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
          style={{
            margin: wp('2.4%'),
            marginTop: hp('-5%'),
          }}
          contentContainerStyle={{height: 900}}>
          <View style={styles.textContainer}>
            <View style={styles.text}>
              <View>
                <Text style={styles.name}>{this.state.data.name}</Text>
                <Text style={styles.name}>{this.state.data.date}</Text>
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
              <Text style={styles.name}>{this.state.data.content}</Text>
            </View>
          </View>
          <View style={styles.rateContainer}>
            <Text style={{color: '#9E9898'}}>Үнэлгээ өгөх</Text>
            <Like />
          </View>
          <View style={styles.surveyContainer}>
            <Survey />
          </View>
          <View style={styles.sameContainer}>
            <Image
              style={styles.sameImage}
              source={this.state.data.image}></Image>
            <View style={styles.dateName}>
              <Text style={styles.name}>{this.state.data.name}</Text>
              <Text style={styles.date}>{this.state.data.date}</Text>
              <View style={styles.like}>
                <Like />
              </View>
            </View>
            <TouchableOpacity
              style={{
                alignSelf: 'flex-end',
                position: 'absolute',
                right: wp('4%'),
                bottom: wp('3%'),
              }}>
              <View>
                <Icon name="md-heart" size={25} color="#9B9191"></Icon>
              </View>
            </TouchableOpacity>
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
    paddingHorizontal: wp('4.8%'),
    paddingTop: wp('4.8%'),
  },
  surveyContainer: {
    marginTop: wp('2.4%'),
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: wp('4.8%'),
    paddingTop: wp('4.8%'),
  },
  sameContainer: {
    marginTop: wp('2.4%'),
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    flexDirection: 'row',
  },
  rateContainer: {
    marginTop: wp('2.4%'),
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('4.8%'),
  },
  header: {
    flexDirection: 'row',
    marginTop: hp('4%'),
    marginHorizontal: wp('8%'),
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
    fontSize: wp('3.6%'),
    fontFamily: 'Cochin',
  },
  heart: {
    position: 'absolute',
    right: 0,
  },
  sameImage: {
    width: wp('24%'),
    height: wp('24%'),
    alignItems: 'center',
    borderRadius: 10,
    margin: wp('1%'),
  },
  like: {
    marginLeft: wp('-30%'),
    marginTop: hp('3%'),
  },
});