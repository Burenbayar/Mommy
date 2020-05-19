import React, {Component} from 'react';
import {
  View,
  TextInput,
  Modal,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class NamesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
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
  static navigationOptions = {
    header: false,
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.bg}>
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
          <View>
            <View>
              {this.state.nerList.map((e, i) => {
                if (i == 0) return <View />;
                else
                  return (
                    <View style={{flexDirection: 'row', margin: 10}}>
                      <View style={styles.numbers}>
                        <Text key={i}>{i}</Text>
                      </View>
                      <View style={styles.ners}>
                        <Text key={e}>{e}</Text>
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
            <Modal transparent={true} visible={this.state.show}>
              <View style={styles.modal}>
                <View style={styles.nertext}>
                  <TextInput
                    placeholder="Нэр бичих"
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
                      this.addName();
                      this.setState({show: false});
                    }}></Ionicons>
                </View>
              </View>
            </Modal>
          </View>
        </View>

        {/* <Button color=("#EE227C","#F36227") onPress={()=>{null}} title='Нэр сонгох'>
        </Button> */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
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
    backgroundColor: '#FFFFFF',
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
    backgroundColor: '#FFFFFF',
    height: 50,
    width: '17%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
  },
  ners: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
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
  bg: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    flexDirection: 'column',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#F4F4F4',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
