import React, {Component} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class NamesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      ner: '',
      nerList: [''],
      show: false,
    };
  }
  textChange = (e) => {
    this.setState({text: e});
  };
  addName = () => {
    const prev = this.state;
    prev.nerList.push(this.state.text);
    this.setState({prev});
  };
  Random = () => {
    var RandomName =
      Math.floor(Math.random() * (this.state.nerList.length - 1)) + 1;
    this.setState({
      ner: RandomName,
    });
  };
  static navigationOptions = {
    header: false,
  };
  render() {
    return (
      <View style={{flex:1}}>
        <View style={styles.header}>
          <TouchableOpacity
            style={{marginLeft: '5%'}}
            onPress={() => this.props.navigation.navigate('Хэрэгсэл')}>
            <Ionicons name="ios-arrow-back" color="#00000050" size={30} />
          </TouchableOpacity>
          <View>
            <Text
              style={{
                fontSize: 22,
                fontWeight: 'bold',
                fontFamily: 'roboto',
                marginLeft: 10,
              }}>
              НЭР ӨГӨХ
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              this.setState({show: true});
            }}>
            <View
              style={{
                flex: 1,
                alignItems: 'flex-end',
                justifyContent: 'center',
                marginRight: 10,
              }}>
              <MaterialIcons name="add" color="#00000050" size={30} />
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView>
              <View>
                {this.state.nerList.map((e, i) => {
                  if (i == 0) return <View />;
                  else
                    return (
                      <View style={{flexDirection: 'row', margin: 10}}>
                        <View style={styles.numbers}>
                          <Text Key={i}>{i}</Text>
                        </View>
                        <View style={styles.ners}>
                          <Text Key={e}>{e}</Text>
                          <View>
                            <MaterialIcons
                              name="clear"
                              color="#00000050"
                              size={30}
                            />
                          </View>
                        </View>
                      </View>
                    );
                })}
              </View>
              <Modal transparent={true} isVisible={this.state.show}>
                <View style={styles.modal}>
                  <View style={styles.nertext}>
                    <TextInput
                      placeholder="Нэр бичих"
                      style={{
                        backgroundColor: '#f4f4f4',
                        borderRadius: 30,
                        width: '80%',
                        height: 40,
                      }}
                      onChangeText={(e) => this.textChange(e)}
                    />
                    <Ionicons
                      style={{backgroundColor: '#ffffff'}}
                      name="md-send"
                      color="#00000050"
                      size={30}
                      onPress={() => {
                        this.addName();
                        this.setState({show: false});
                      }}></Ionicons>
                  </View>
                </View>
              </Modal>
        </ScrollView>
        <View style={styles.MainContainer}>
          <Text> {this.state.nerList[this.state.ner]} </Text>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={this.Random}
            style={{width: '80%'}}>
            <LinearGradient
              colors={['#F36227', '#EE227C']}
              style={styles.LinearGradientStyle}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0.9}}
              locations={[0, 1]}>
              <Text style={styles.buttonText}>НЭР СОНГОХ</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    height:'23%',
    backgroundColor:'#f4f4f4',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  LinearGradientStyle: {
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 14,
    color: '#fff',
    backgroundColor: 'transparent',
  },
  keyb: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  nertext: {
    backgroundColor: '#ffffff',
    marginRight: 10,
    marginLeft: 10,
    padding: 20,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  numbers: {
    backgroundColor: '#ffffff',
    height: 50,
    width: '17%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
  },
  ners: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    height: 50,
    width: '80%',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
    padding: 20,
    elevation: 1,
    fontSize: 14,
  },
  header: {
    flexDirection: 'row',
    height:'10%',
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
