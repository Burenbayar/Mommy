import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const MinAgo = (props) => {
  const timeCal = (pDate) => {
    pDate = new Date(props.pDate);
    const currentDate = new Date();
    let timeString = Math.floor((currentDate - pDate) / 1000);
    let secund = timeString;
    timeString = Math.floor(timeString / 60);
    // timeString = 122;
    if (timeString >= 518400)
      timeString = `${Math.floor(timeString / 518400)} жилийн өнмө`;
    else if (timeString >= 43200)
      timeString = `${Math.floor(timeString / 43200)} сарын өнмө`;
    else if (timeString >= 1440)
      timeString = `${Math.floor(timeString / 1440)}  хоногийн өнмө`;
    else if (timeString > 60)
      timeString = `${Math.floor(timeString / 60)}  цаг ${
        timeString % 60
      } мин өнмө`;
    else if (timeString >= 1) timeString = `${timeString} мин өмнө`;
    else timeString = `${secund} сек өмнө`;

    return timeString;
  };
  if (props.font)
    //End jaaaaahan marginii override shaahal baihdaaa huu
    return (
      <Text style={[styles.min, {fontSize: props.font}]}>
        {timeCal(props.pDate)}
      </Text>
    );
  else return <Text style={styles.min}>{timeCal(props.pDate)}</Text>;
};
const Pro = (props) => (
  <View style={styles.pro}>
    <Image source={props.proImage} style={styles.proImage}></Image>
  </View>
);

const Story = (props) => {
  if (props.nothing && !props.mini)
    return (
      <View
        style={[
          styles.container,
          {backgroundColor: 'transarent', margin: '1%'},
        ]}></View>
    );
  else if (props.mini)
    return (
      // <Text>{props.backImage}</Text>
      <ImageBackground
        source={props.backImage}
        style={[styles.backImage, {height: hp('25%'), width: wp('30%')}]}
        imageStyle={{borderRadius: 8}}>
        <View
          style={[
            styles.container,
            {
              borderRadius: 8,
              overflow: 'hidden',
              height: hp('25%'),
              width: wp('30%'),
              // height: 180,
              // width: 120,
            },
          ]}>
          <TouchableNativeFeedback
            useForeground={false}
            background={TouchableNativeFeedback.Ripple('#5F5F5F')}
            onPress={() => alert(props.userId)}>
            <View style={styles.container}>
              <Pro proImage={props.proImage}></Pro>
              <View
                style={{
                  // backgroundColor: 'purple',
                  flex: 1,
                  width: '60%',
                  alignItems: 'flex-end',
                  flexDirection: 'row',
                  padding: '5%',
                  paddingBottom: '0%',
                }}>
                <Text style={[styles.title, {fontSize: 14}]}>
                  {props.title}
                </Text>
              </View>

              <View
                style={{
                  // backgroundColor: 'gray',
                  padding: '5%',
                  height: '7%',
                  justifyContent: 'center',
                }}>
                <MinAgo font={10} pDate={props.pDate}></MinAgo>
              </View>
            </View>
          </TouchableNativeFeedback>
        </View>
      </ImageBackground>
    );
  return (
    <View style={[styles.containerReal]}>
      <ImageBackground
        source={props.backImage}
        style={styles.backImage}
        imageStyle={{borderRadius: 8, height: hp('35%'), width: wp('46%')}}>
        <View style={[styles.container]}>
          <TouchableNativeFeedback
            useForeground={false}
            background={TouchableNativeFeedback.Ripple('#5F5F5F')}
            onPress={() => alert('hhe')}>
            <View style={styles.container}>
              <Pro proImage={props.proImage}></Pro>
              <View
                style={{
                  // backgroundColor: 'purple',
                  flex: 1,
                  // width: '80%',
                  alignItems: 'flex-end',
                  flexDirection: 'row',
                  padding: '5%',
                  paddingBottom: '0%',
                }}>
                <Text style={styles.title}>{props.title}</Text>
              </View>

              <View
                style={{
                  // backgroundColor: 'gray',
                  padding: '5%',
                  height: '7%',
                  justifyContent: 'center',
                }}>
                <MinAgo pDate={props.pDate}></MinAgo>
              </View>
            </View>
          </TouchableNativeFeedback>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  containerReal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // height: hp('35%'),
    // width: wp('40%'),
    // borderRadius: 8,
    // overflow: 'hidden',
    //backgroundColor: 'yellow',
    marginBottom: '1.5%',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    height: hp('35%'),
    width: wp('46%'),
    borderRadius: 8,
    overflow: 'hidden',
    // backgroundColor: 'red',
    // margin: '1%',
  },
  backImage: {
    // backgroundColor: 'blue',
    height: hp('35%'),
    width: wp('46%'),
    // borderRadius: 8,
    // overflow: 'hidden',
    flex: 1,
    marginHorizontal: 4,
  },
  pro: {
    margin: '4%',
    borderRadius: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: 34,
    height: 34,
  },
  proImage: {
    width: 30,
    height: 30,
  },
  min: {
    fontSize: 12,
    marginBottom: '1%',
    color: 'white',
  },
  title: {color: 'white', fontSize: 17},
});

export default Story;
