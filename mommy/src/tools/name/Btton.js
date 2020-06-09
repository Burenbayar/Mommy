import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NumberHolder: 1,
    };
  }
  
  GenerateRandomnumber = () => {
    var RandomNumber = Math.floor(Math.random() * 100%5) + 1;
    this.setState({
      NumberHolder: RandomNumber,
    });
  };
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text>
        {this.state.NumberHolder}</Text>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={this.GenerateRandomnumber}
        style={{width: '80%'}}>
        <LinearGradient
          colors={['#F36227', '#EE227C']}
          style={styles.LinearGradientStyle}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0.9}}
          locations={[0, 1]}>
          <Text style={styles.buttonText} >ДАХИН СОНГОХ</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
    );
  };
};
const styles = StyleSheet.create({
  
  MainContainer: {
    marginBottom:"30%",
    marginTop:"70%",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  LinearGradientStyle: {
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 14,
    color: '#fff',
    backgroundColor: 'transparent',
  },
})