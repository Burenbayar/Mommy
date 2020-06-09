import React, {Component} from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  Image,
} from 'react-native';
import Maticon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import NewsComponent from '../Common/NewsComponent/newsComponent';

class BaiguulgaPro extends React.Component {

  render(){
    return(
      <ScrollView>
           <ImageBackground source={require('./Img/BaiguulgaBack.png')} style={styles.BackImg}>
              <View>
                <TouchableOpacity style={styles.bell}>
                    <Maticon size={wp('6%')} name={'bell'} color="white"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.back}>
                    <Icon size={wp('7%')} name={'md-menu'} color="white"/>
                </TouchableOpacity>
              </View>
          </ImageBackground>
          <View style={styles.Header}>
              <View style={styles.Pro}>
                <Image source={require('./Img/PImg.png')} style={styles.PImg}/>
                <View style={styles.First}>
                  <Text style={styles.Name}>Өргөө Амаржих Газар</Text>
                  <View style={styles.First1}>
                    <View style={styles.First2}>
                      <Text style={styles.textBold}>1-р төрөх</Text>
                      <View style={styles.First3}>
                        <Text style={styles.text}>Гишүүд</Text>
                        <Text style={styles.textBold}>25,053</Text>
                      </View>
                    </View>
                    <View style={styles.iconspace}>
                      <TouchableOpacity style={styles.icon}>
                        <Icon size={wp('9%')} name='md-information-circle' size={18} color="grey"/>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.icon}>
                        <Icon size={wp('9%')} name="md-heart" size={18} color="#FA3D5A" />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.icon}>
                        <Icon size={wp('9%')} name="md-send" size={18} color="grey" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
          </View>
          <View style={styles.Body}>
              <View style={styles.Data}>
                <NewsComponent/>
              </View>
          </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  BackImg:{
      width: wp('100%'),
      height: wp('55.7%'),
  },
  back:{
      position:'absolute',
      left: 0,
      marginLeft: wp('4%'),
      marginTop: wp('3%'),
    },
  bell:{
      position:'absolute',
      right: 0,
      marginRight: wp('4%'),
      marginTop: wp('3%'),
  },
  Pro:{
    position: 'absolute',
    flexDirection: "row",
    bottom: 0,
    marginBottom: wp('6.3%'),
  },
  Header:{
    marginHorizontal: wp('2.4%'),
    backgroundColor: 'white',
    borderBottomRightRadius: wp('3.7%'),
    borderBottomLeftRadius: wp('3.7%'),
    height:wp('14.1%'),
  },
  PImg:{
    width: wp('18.6%'),
    height: wp('18.6%'),
    borderRadius: wp('9.3%')
  },
  First1:{
    marginLeft: wp('3%'),
    flexDirection: 'row',
    marginTop: wp('5%')
  },
  First2:{
    flexDirection: 'column',
  },
  First3:{
    flexDirection: 'row',
  },
  Name:{
    fontSize: 16,
    color: 'white', 
    fontWeight: 'bold',
    marginLeft: wp('3%'),
    marginTop: wp('2%'),
  },
  text:{
    fontSize: 8,
    color: 'grey',
    marginRight: wp('1%'),
  },
  textBold:{
    fontSize: 9,
    fontWeight: 'bold',
  },
  Body:{
      backgroundColor: 'white',
      borderRadius: 20,
  },
  iconspace:{
    marginLeft: wp('30%'),
    flexDirection: 'row',
    marginBottom: wp('-1%'),
  },
  icon:{
    marginLeft: wp('3%')
  },
  Data:{

  },
});
export default BaiguulgaPro;