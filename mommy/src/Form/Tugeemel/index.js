import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Category from '../Category';

const Tugeemel = (props) => {
  return (
    //eniig Flat list bolgono!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    <ScrollView style={styles.container}>
      <Category navigation={props.navigation} title="Нярайн асаргаа" />
      <Category navigation={props.navigation} title="Эхийн эрүүл мэнд" />
      <Category
        navigation={props.navigation}
        title="Гэр бүлийн сэтгэл судлал"
      />
      <Category navigation={props.navigation} title="Нярайн асаргаа" />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});
export default Tugeemel;
