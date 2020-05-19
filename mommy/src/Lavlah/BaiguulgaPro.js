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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class BaiguulgaPro extends React.Component {
    render(){
        <View style={styles.container}>
            <View style={styles.header}>
              <View>
                <ImageBackground source={image} style={styles.image}>
                  <View>
                    <Text style={styles.text}>Өргөө Амаржих газар</Text>
                  </View>
                  <View>  
                    <TouchableOpacity style={styles.bell}>
                      <Maticon size={wp('6%')} name={'bell'} color="grey"/>
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
              </View>
            </View>
            <View style={styles.body}>

            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
    },
    header:{

    },
    body:{

    },
  });