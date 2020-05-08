import React, {Component} from 'react';
import {
  Image,
  View,
  StyleSheet,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }
  render() {
    const {search} = this.state;
    return (
      <View style={styles.container}>
        <ImageBackground
          style={{width: '100%', height: hp('31%')}}
          source={require('../contentImage/headerX.png')}>
          <View style={styles.header}>
            <TouchableOpacity>
              <Icon name="md-menu" size={35} color="white"></Icon>
            </TouchableOpacity>
            <View style={styles.searchButton}>
              <TextInput
                style={styles.inputSearch}
                value={this.props.searchText}
                onChangeText={this.props.onSearchChangeText}></TextInput>
              <TouchableOpacity style={styles.searchIcon}>
                <Icon name="ios-search" size={25} color="#000000"></Icon>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Icon name="ios-notifications" size={30} color="white"></Icon>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginTop: hp('6%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchButton: {
    alignItems: 'center',
    width: wp('60%'),
    height: hp('5%'),
    padding: 1,
    borderRadius: 25,
    flexDirection: 'row',
    marginHorizontal: wp('8%'),
    backgroundColor: 'white',
    opacity: 0.5,
  },
  searchIcon: {
    position: 'absolute',
    right: 10,
    opacity: 2,
  },
  inputSearch: {
    fontSize: 20,
    color: 'black',
    opacity: 1,
  },
});
