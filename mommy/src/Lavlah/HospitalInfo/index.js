import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import Maticon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Json from './json';


class hospitalInfo extends React.Component {
    constructor() {
        super();
        this.state = items;
    }
    
    render(){
        return(
            <ScrollView>
                <ImageBackground source={this.state.items.BackImg} style={styles.BackImg}>
                    <TouchableOpacity style={styles.bell}>
                        <Maticon size={wp('6%')} name={'bell'} color="grey"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.back}>
                        <Icon size={wp('7%')} name={'ios-arrow-back'} color="grey"/>
                    </TouchableOpacity>
                </ImageBackground>
                <View>
                    <Image source={this.PImg} style={styles.PImg}/>
                </View>
                <View style={styles.Body}>
                    <View style={styles.Data}>
                        
                    </View>
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
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
    PImg:{
        justifyContent:'center'
    },
    Body:{
        backgroundColor: 'white',
        borderRadius: 20,
    },
    Data:{
        borderBottomWidth: 1,
    },
});

export default hospitalInfo;
