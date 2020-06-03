import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Platform,
  ScrollView,
  Text,
  Image,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconDot from 'react-native-vector-icons/Entypo';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Survey from './Survey';
import Like from '../../Common/Like';
const data = {clicked: 0, like: 1000, dislike: 999};
const Header_Maximum_Height = 200;

const Header_Minimum_Height = 50;
const HEADER_SCROLL_DISTANCE = Header_Maximum_Height - Header_Minimum_Height;
export default class SeeMore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.navigation.getParam('data'),
    };
    this.AnimatedHeaderValue = new Animated.Value(0);
  }

  render() {
    const imageOpacity = this.AnimatedHeaderValue.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });
    const imageTranslate = this.AnimatedHeaderValue.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -50],
      extrapolate: 'clamp',
    });
    const AnimateHeaderHeight = this.AnimatedHeaderValue.interpolate({
      inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],

      outputRange: [Header_Maximum_Height, Header_Minimum_Height],

      extrapolate: 'clamp',
    });

    return (
      <View style={styles.MainContainer}>
        <ScrollView
          style={{margin: wp('2%'), flex: 1}}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingTop: Header_Maximum_Height}}
          onScroll={Animated.event([
            {nativeEvent: {contentOffset: {y: this.AnimatedHeaderValue}}},
          ])}>
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
                alignItems: 'flex-end',
                position: 'absolute',
                right: 10,
                top: '50%',
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

        <Animated.View
          style={[
            styles.HeaderStyle,
            {
              height: AnimateHeaderHeight,
            },
          ]}>
          <Animated.Image
            style={[
              styles.backgroundImage,
              {
                opacity: imageOpacity,
                transform: [{translateY: imageTranslate}],
              },
            ]}
            source={this.state.data.image}
          />
          <Animated.View style={styles.header2}>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Icon
                  size={wp('9%')}
                  name={'ios-arrow-back'}
                  color="white"></Icon>
              </TouchableOpacity>
              <TouchableOpacity style={styles.heart}>
                <View>
                  {this.state.data.heart ? (
                    <Icon
                      name="md-heart"
                      size={wp('8%')}
                      color="#FA3D5A"></Icon>
                  ) : (
                    <Icon
                      name="md-heart"
                      size={wp('8%')}
                      color="#9B9191"></Icon>
                  )}
                </View>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: Platform.OS == 'ios' ? 20 : 0,
  },
  HeaderStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: Platform.OS == 'ios' ? 20 : 0,
  },
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
    marginHorizontal: wp('4%'),
    marginTop: 18,
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
  header2: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    // overflow: 'hidden',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: Header_Maximum_Height,
    resizeMode: 'cover',
  },
});
