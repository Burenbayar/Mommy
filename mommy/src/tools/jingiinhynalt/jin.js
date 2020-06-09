import React, {Component} from 'react';
import {
  View,
  Text,
  Flatlist,
  Button,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import Modal from 'react-native-modal';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const width = Dimensions.get('window').width;
const numColumns = 2;

export default class jinScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoruu: 0,
      undur: 162,
      Ajin: 52,
      show: false,
      text:0,
    };
  }
  diff = () => {
    this.setState({zoruu: this.state.text - this.state.Ajin});
  };
  // add =()=>{
  //   const prev = this.state;
  //   prev.List.push(this.state.text);
  //   this.setState({prev})
  // }
  textChange = (e) => {
    this.setState({text: e});
  };
  static navigationOptions = {
    header: false,
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <TouchableOpacity
            style={{marginLeft: 10}}
            onPress={() => this.props.navigation.navigate('Хэрэгсэл')}>
            <Ionicons name="ios-arrow-back" color="#7E7E7E" size={30} />
          </TouchableOpacity>
          <Text style={{fontSize: 22, marginLeft: 10}}>
            Биеийн жингийн хяналт
          </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View style={styles.container}>
            {/* ///////////////////////////////// */}
            <View style={styles.one}>
              <View style={styles.box}>
                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                  <Text style={{fontSize: wp('13%'), fontWeight: 'bold', color:'#7e7e7e'}}>
                    {this.state.Ajin}
                  </Text>
                  <Text style={{fontSize: wp('5%'), fontWeight: 'bold', color:'#7e7e7e'}}>
                    kg
                  </Text>
                </View>
                <Text
                  style={{
                    margin: 5,
                    color: '#7E7E7E',
                  }}>
                  Анхны жин
                </Text>
              </View>
              <View style={styles.box}>
                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                  <Text style={{fontSize: wp('13%'), fontWeight: 'bold', color:'#7e7e7e'}}>
                    {this.state.undur}
                  </Text>
                  <Text style={{fontSize: wp('5%'), fontWeight: 'bold', color:'#7e7e7e'}}>
                    cm
                  </Text>
                </View>
                <Text
                  style={{
                    margin: 5,
                    color: '#7E7E7E',
                  }}>
                  Биеийн өндөр
                </Text>
              </View>
            </View>
            {/* ///////////////////////////////// */}
            <View style={styles.two}>
              <View style={styles.box}>
                <View>
                  {
                    <View
                      style={{flexDirection: 'row', alignItems: 'flex-end', }}>
                      <Text style={{fontSize: wp('13%'), fontWeight: 'bold', color:'#7e7e7e'}}>
                        {this.state.text}
                      </Text>
                      <Text style={{fontSize: wp('5%'), fontWeight: 'bold', color:'#7e7e7e'}}>
                        kg
                      </Text>
                    </View>
                  }
                </View>
                
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent:'space-between',
                    alignItems:'center'
                  }}>
                  <Text style={{marginLeft: 5, color: '#7E7E7E'}}>
                    Жин оруулах
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({show: true});
                    }}>
                    <View>
                      <MaterialIcons name="add" color="#7e7e7e" size={30} />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.box}>
                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                <Text style={{fontSize: wp('13%'), fontWeight: 'bold', color:'#2FC0EB'}}>
                  {this.state.zoruu}
                </Text>
                <Text style={{fontSize: wp('5%'), fontWeight: 'bold', color:'#2FC0EB'}}>
                  kg
                </Text>
                </View>
                <Text style={{marginLeft: 5, color: '#7E7E7E'}}>
                  Нийт нэмэгдсэн жин
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          isVisible={this.state.show}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={styles.modal}>
              <Text style={{marginLeft: 7}}>Биеийн жин(kg)</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                <TextInput
                  placeholder="Жингээ оруулна уу"
                  style={{
                    backgroundColor: '#F4F4F4',
                    borderRadius: 30,
                    width: '80%',
                    height: 40,
                  }}
                  onChangeText={(e) => this.textChange(e)}
                />
                <Ionicons
                  name="md-send"
                  color="#00000050"
                  size={30}
                  onPress={() => {
                    this.diff();
                    this.setState({show: false});
                  }}></Ionicons>
              </View>
            </View>
          </View>
        </Modal>
        <View style={styles.grapic}></View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: '#f4f4f4',
    height: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    flexDirection: 'row',
  },
  one: {
    backgroundColor: '#f4f4f4',
    flex: 1,
    height: wp('96%'),
    alignItems: 'center',
  },
  two: {
    backgroundColor: '#f4f4f4',
    flex: 1,
    height: wp('96%'),
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#ffffff',
    borderColor: '#707070',
    width: wp('45%'),
    height: wp('45%'),
    borderRadius: 8,
    marginTop: wp('4%'),
    justifyContent: 'space-between',
  },
  grapic: {
    backgroundColor: 'green',
    height: 15,
  },
  modal: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 8,
    height: wp('30%'),
    width: '80%',
  },
});
