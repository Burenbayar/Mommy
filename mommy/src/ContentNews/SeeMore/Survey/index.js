import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  FlatList,
} from 'react-native';
import {CheckBox, AirbnbRating} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import surveyJson from './surveyJson';

class Survey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: surveyJson[0],
      item: surveyJson[0].answer,
    };
  }
  checkThisBox = (itemID) => {
    let data = this.state.item;
    data[itemID].check = !data[itemID].check;
    this.setState({item: data});
  };

  renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <View style={styles.check}>
          <CheckBox
            uncheckedIcon={
              <Icon
                name="checkbox-blank-outline"
                size={25}
                color="#9B9191"></Icon>
            }
            checkedIcon={
              <Icon name="checkbox-marked" size={25} color="#FA3D5A"></Icon>
            }
            containerStyle={{marginLeft: wp('-3%'), margin: wp('-3%')}}
            onPress={() => this.checkThisBox(item.id)}
            checked={this.state.item[item.id].check}></CheckBox>
          <Text style={styles.checkText}>{item.name}</Text>
        </View>
        <View style={styles.percent}>
          <View
            style={{
              backgroundColor: '#D9D8D8',
              borderRadius: 15,
              width: wp('75%'),
              height: wp('2%'),
            }}>
            <View
              style={{
                backgroundColor: '#FA3D5A',
                borderRadius: 15,
                height: wp('2%'),
                width: item.percent,
              }}></View>
          </View>
          <Text style={styles.percentText}>{item.percent}</Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View>
        <Text style={{fontSize: wp('3.5%')}}>{this.state.data.question}</Text>
        <View>
          <FlatList
            style={styles.container}
            data={this.state.item}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{flexGrow: 1}}
          />
        </View>
      </View>
    );
  }
}

export default Survey;

const styles = StyleSheet.create({
  percent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  percentText: {
    color: '#958C8C',
    position: 'absolute',
    right: 0,
    fontSize: wp('3.5%'),
  },
  check: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  container: {
    marginVertical: hp('2%'),
  },
  item: {
    marginVertical: hp('1%'),
  },
  checkText: {
    color: '#9E9898',
    fontSize: wp('3.5%'),
  },
});
