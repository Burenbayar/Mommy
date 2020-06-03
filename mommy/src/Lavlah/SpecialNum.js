import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import HospitalJson from './HospitalJson';
import Eicon from 'react-native-vector-icons/Entypo';
import Maticon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Call from './Call/call';

class SpecialNum extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      modalVisible: false,
    };
  }

  componentDidMount() {
    this.setState({items: HospitalJson});
  }
  handleModal = () =>{
    this.setState({modalVisible: !this.state.modalVisible});
  }
  renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <View style={styles.first}>
          <Image style={styles.first1} source={item.Pimage}/>
        </View>
        <View style={styles.second}>
          <View style={styles.second1}>
            <View style={styles.second11}>
              <View>
                <Text style={styles.nameText}>
                  {item.name}
                </Text>
              </View>
              <View>
                <Text style={styles.locText}>
                  {item.loc}
                </Text>
              </View>
            </View>
            <View style={{marginTop: wp('1%')}}>
              <Eicon name='location-pin' size={wp('6%')} color="grey" />
            </View>
          </View>
          <View style={styles.second2}>
            <View style={styles.phone}>
              <TouchableOpacity onPress={this.handleModal}>
                <Maticon name='phone' size={wp('6%')} color="grey" />
              </TouchableOpacity>
              <View style={{marginLeft: wp('1%')}}>
                <Text style={styles.locText}>
                    {item.tele}
                </Text>
              </View>
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
            data={HospitalJson}
            renderItem={this.renderItem}
            maxHeight={2000}
            marginBottom={70}
          />
        </View>
        <Call handleModal={this.handleModal} isModalVisible = {this.state.modalVisible}/>
      </ScrollView>
    );
  }
}

export default SpecialNum;

const styles = StyleSheet.create({
  container: {
    margin: wp('2.4%'),
    backgroundColor: '#FFFFFF',
    borderRadius: wp('3.7%'),
    height: wp('22.9%'),
    width: wp('95.2%'),
    flexDirection: 'row',
  },
  first:{
    width: wp('23.4%'),
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  first1:{
    width: wp('18.6%'),
    height: wp('18.6%'),
    borderRadius: wp('9.3%')
  },
  second1:{
    flexDirection: 'row',
  },
  second11:{
    width: wp('63.2%'),
    marginTop: wp('1.5%'),
    height: wp('15.4%')
  },
  nameText:{
    fontWeight: 'bold',
    fontSize: 14
  },
  locText:{
    fontSize: 9,
  },
  second2:{
    height: wp('7.4%'),
    flexDirection: 'row',
  },
  second21:{
    width: wp('25.6%'),
  },
  phone:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: wp('-5%'),
  }
});