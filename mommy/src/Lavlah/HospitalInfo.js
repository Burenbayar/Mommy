import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  FlatList,
  Image,
  ImageBackground,
} from 'react-native';
import InfoJson from './Json/InfoJson';
import Eicon from 'react-native-vector-icons/Entypo';
import Maticon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class HospitalInfo extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [],
        };
    }
      
    
    componentDidMount() {
       this.setState({items: InfoJson});
    }


    render() {
        return(
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.first}>
                    <ImageBackground source={this.state.items.bImg} style={styles.backImg}>
                        <View style={styles.icon}>  
                            <TouchableOpacity style={styles.back}>
                            <Ionicon size={wp('7%')} name={'ios-arrow-back'} color="black"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.bell}>
                            <Maticon size={wp('6%')} name={'bell'} color="black"/>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.second}>
                    <Image source={this.state.items.pImg} style={styles.pImg}/>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.content}>
                    <View>
                        <Text style={styles.sText}>Нэр</Text>
                    </View>
                    <View>
                    <Text style={styles.cText}>{this.state.items.Name}</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <View>
                        <Text style={styles.sText}>Чиглэл</Text>
                    </View>
                    <View>
                    <Text style={styles.cText}>{this.state.items.Direction}</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <View>
                        <Text style={styles.sText}>Ажиллсан жил</Text>
                    </View>
                    <View>
                    <Text style={styles.cText}>{this.state.items.Wyear}</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <View>
                        <Text style={styles.sText}>Төлөв</Text>
                    </View>
                    <View>
                    <Text style={styles.cText}>{this.state.items.Type}</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <View>
                        <Text style={styles.sText}>Цол хэргэм</Text>
                    </View>
                    <View>
                    <Text style={styles.cText}>{this.state.items.Pos}</Text>
                    </View>
                </View><View style={styles.content}>
                    <View>
                        <Text style={styles.sText}>Хаяг</Text>
                    </View>
                    <View>
                    <Text style={styles.cText}>{this.state.items.Loc}</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <View>
                        <Text style={styles.sText}>Утас</Text>
                    </View>
                    <View>
                    <Text style={styles.cText}>{this.state.items.Tel}</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <View>
                        <Text style={styles.sText}>Мэйл хяг</Text>
                    </View>
                    <View>
                    <Text style={styles.cText}>{this.state.items.Mail}</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <View>
                        <Text style={styles.sText}>Вэб сайт</Text>
                    </View>
                    <View>
                    <Text style={styles.cText}>{this.state.items.Web}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )}
}

export default HospitalInfo;

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
    },
    header:{
        
    },
    body:{
        backgroundColor: 'white',
        marginHorizontal: wp('3%'),
        marginTop: hp('2%'),
        paddingTop: hp('1%'),
    },
    content:{
        borderBottomColor: '#C3C3C3',
        borderBottomWidth: 1,
        paddingBottom: hp('2%'),
        paddingTop: hp('1%'),
        paddingHorizontal: wp('3%')
    },
    first: {
        height:hp('18%')
    },
    second: {
        alignItems: 'center',
    },
    backImg:{
        flexDirection: 'row',
        height: hp('25.7%'),
        width: wp('100%')
    },
    pImg:{
        width: wp('26%'),
        height: wp('26%'),
        borderRadius: wp('13%'),
    },
    icon:{
        marginTop: wp('4%'),
        flexDirection: 'row',
        width: wp('100%'),
    },
    back:{
        marginLeft: wp('3%'),
    },
    bell:{
        position:'absolute',
        right: 0,
        marginRight: wp('3%'),
    },
    sText:{
        fontSize: 10,
        color:'grey',
    },
    cText:{
        fontSize: 14,
    }
  });