import React, {Component} from 'react';
import {Button, View, TextInput, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default class NamesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      nerList: [''],
    }
  }

  textChange = (e) => {
    this.setState({text: e});
  }
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
      <View style={styles.bg}>
        <View style={styles.header}>
          <View style={{marginLeft: '5%', }} >
            <Ionicons name='ios-arrow-back'
            color="#D8D8D8"
            size={30}/>
          </View>
          <View>
            <Text style={{
                fontSize: 22,
                fontWeight: 'bold',
                fontFamily: 'roboto',
                marginLeft: 5}}>НЭР ӨГӨХ</Text>
          </View>
          <View >
            <MaterialIcons name='add'
            color="#D8D8D8"
            size={30}
            />
          </View>          
        </View>
        <View>
          {this.state.nerList.map((e, i) => {
            if (i == 0) return <View />;
            else
              return (
                <View style={{flexDirection: 'row', margin: 10,}}>
                  <View style={styles.numbers}>
                  <Text  key={i}>{i}</Text>
                  </View>
                  <View style={styles.ners}>
                  <Text  key={e}>{e}</Text>
                  </View>
                </View>
              );
          })}
        </View>

        <TextInput
          style={{borderWidth: 1}}
          onChangeText={(e) => this.textChange(e)}
        />
        <Button onPress={this.addName} title="My fav"></Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  numbers:{
    backgroundColor:'#FFFFFF',
    height: 50,
    width: '17%',
    borderRadius: 10,
    alignItems:"center",
    justifyContent: "center",
    elevation: 1,
    
  },
  ners:{
    backgroundColor:'#FFFFFF',
    height: 50,
    width: '80%',
    borderRadius: 10,
    alignItems:"center",
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 10,
    elevation: 1,
    fontSize:14,
    
  },
  bg: {
    backgroundColor:'#F4F4F4'
  },
  header:{
    flexDirection:'row',
    height:'24%',
//backgroundColor:'green',
    alignItems:'center'

  }
})