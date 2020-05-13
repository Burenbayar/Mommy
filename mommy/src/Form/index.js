import React, {Component} from 'react';
import {
  Image,
  View,
  StyleSheet,
  TextInput,
  ImageBackground,
  Text,
  FlatList,
} from 'react-native';
import Tugeemel from './Tugeemel';
import Category from './Category';
import {ScrollView} from 'react-native-gesture-handler';
import Cards from './Cards';

class Form extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Category title="Нярайн асаргаа" />
        <Category title="Эхийн эрүүл мэнд" />
        <Category title="Гэр бүлийн сэтгэл судлал" />
        <Category title="Нярайн асаргаа" />

        {/* <Cards /> */}

        {/* <Tugeemel></Tugeemel> */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: '1%',
    paddingLeft: 3,
    width: '100%',
    //backgroundColor: 'purple',
  },
  text: {
    fontSize: 20,
    color: 'green',
  },
});

export default Form;
