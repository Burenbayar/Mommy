import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import Story from '../../Common/story';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ficon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';

const formatData = (data) => {
  if (data.length % 2 != 0)
    data.push({
      userId: ` blank-${Math.random() * 100 + 1}`,
      empty: true,
    });
  return data;
};

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    // this.setState({obj: props.navigation.getParam('obj')});
  }

  componentDidMount = () => {
    this.setState({value: this.props.navigation.getParam('value')});
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => this.props.navigation.goBack()}>
            <Icon
              size={wp('7%')}
              name={'ios-arrow-back'}
              color="#9E9898"></Icon>
          </TouchableOpacity>
          <View style={styles.modalSearch}>
            <TextInput
              style={styles.input}
              //autoFocus={true}
              inlineImageLeft="search_icon"
              value={this.state.value}
              keyboardType="web-search"
              onFocus={() => this.props.navigation.goBack()}
              //   onBlur={() => console.log('focus lost')}
              onChangeText={(text) => this.setState({word: text})}
            />
            <TouchableOpacity
              style={styles.search}
              onPress={() => this.props.navigation.goBack()}>
              <Icon name="ios-close" size={45} color="#7E7E7E" />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{width: wp('100%'), borderWidth: 0.3, borderColor: '#a6a1a1'}}
        />
        {/* <FlatList
          style={styles.container}
          numColumns={2}
          keyExtractor={(item) => item.userId} // eniig shalgah!
          data={formatData(obj)}
          renderItem={({item}) => {
            if (item.empty == true) return <Story nothing={true} />;
            return <Story nav={this.props.navigation} items={item} />;
          }}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '93%',
    //marginVertical: hp('2%'),
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    //backgroundColor: 'red',
  },
  container: {
    flex: 1,
    // padding: '1%',
    backgroundColor: 'transparent',
  },
  modalSearch: {
    marginVertical: hp('2%'),
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#cfcfcf',
    borderRadius: 50,
    width: '90%',
    justifyContent: 'space-between',
    overflow: 'hidden',
    paddingLeft: 15,
    alignItems: 'center',
  },
  search: {
    // marginHorizontal: '5%',
    // backgroundColor: 'yellow',
    marginRight: 10,
    borderRadius: 20,
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: '83%',
  },
  input2: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 30,
    justifyContent: 'space-between',
    backgroundColor: '#F4F4F4',
    width: wp('95%'),
    minHeight: hp('5%'),
    maxHeight: hp('20%'),
    alignItems: 'center',
    overflow: 'hidden',
    //paddingRight: 1,
  },
});

export default Result;
