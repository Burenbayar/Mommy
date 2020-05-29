import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  Keyboard,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ficon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';
import Recent from './recent';
import {SearchBar} from 'react-native-elements';
import GetData from '../getData';

const formatData = (data) => {
  if (data.length % 2 != 0)
    data.push({
      userId: ` blank-${Math.random() * 100 + 1}`,
      empty: true,
    });
  return data;
};

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearching: true,
      recents: [],
      focus: true,
      word: '',
      search: '',
    };
  }
  changeTolov = () => {
    this.setState({isSearching: !this.state.isSearching});
  };
  updateSearch = (s) => {
    this.setState({search: s});
  };
  doSearch = () => {
    // this.setState({focus: false});
    //1. ogogdloo tataj awchirna
    //2. history luu hiine.
  };
  deleteAllHirtory = () => {
    //1. Buh history ustgana
    Alert.alert(
      'Анхаар!',
      'Бүх түүхийг устгах уу?',
      [
        {text: 'Үгүй', onPress: () => console.log('I knew youu')},
        {
          text: 'Тийм',
          onPress: () => console.log('Really nigga'),
          // style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  };

  componentDidMount() {
    //this.setState({recents: require('./history')});
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              width: 35,
              height: 30,
            }}
            onPress={() => this.props.navigation.goBack()}>
            <Icon
              size={wp('7%')}
              name={'ios-arrow-back'}
              color="#9E9898"></Icon>
          </TouchableOpacity>
          {/* <View style={styles.modalSearch}>    
            <TextInput
              // focus={this.state.focus}
              style={styles.input}
              autoFocus={true}
              inlineImageLeft="search_icon"
              placeholder="Хайх"
              keyboardType="web-search"
              onFocus={() => console.log('focus received')}
              onBlur={() => console.log('focus lost')}
              onChangeText={(text) => {
                this.setState({word: text});
                if (this.state.word);
              }}
              value={this.state.word}
            />
            <TouchableOpacity
              style={styles.search}
              onPress={() => {
                if (this.state.isSearching === false) this.setState({word: ''});
                else if (this.state.word !== '') this.doSearch();
                this.changeTolov();
              }}>
              {this.state.isSearching ? (
                <Ficon name="search" size={wp('6%')} color="#9E9898" />
              ) : (
                <Icon name="ios-close" size={45} color="#7E7E7E" />
              )}
            </TouchableOpacity>
          </View> */}
          <View>
            <SearchBar
              platform="default"
              lightTheme={true}
              containerStyle={styles.newSearch}
              inputContainerStyle={styles.inputContainer}
              rightIconContainerStyle={styles.rightIcon}
              placeholder="Хайх..."
              onChangeText={this.updateSearch}
              value={this.state.search}
            />
          </View>
        </View>
        <View
          style={{width: wp('100%'), borderWidth: 0.3, borderColor: '#a6a1a1'}}
        />
        {this.state.isSearching && (
          <View style={{alignItems: 'flex-end'}}>
            <TouchableOpacity
              style={styles.clear}
              onPress={() => this.deleteAllHirtory()}>
              <Text style={{fontWeight: 'bold'}}>Clear all</Text>
            </TouchableOpacity>
          </View>
        )}
        {/* <GetData></GetData> */}
        {this.state.isSearching && <Recent />}
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

  inputContainer: {
    borderRadius: 50,
    backgroundColor: '#cfcfcf',
  },
  newSearch: {
    backgroundColor: 'transparent',
    //backgroundColor: 'red',
    justifyContent: 'center',
    width: wp('85%'),
    height: hp('7%'),
    overflow: 'hidden',
  },
  modalSearch: {
    marginVertical: hp('2%'),
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#cfcfcf',
    borderRadius: 50,
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
    // backgroundColor: 'red',
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
  clear: {
    //backgroundColor: 'red',
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
    marginRight: 10,
  },
});

export default Search;
