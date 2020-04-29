import React, {Component} from 'react';
import {
  Image,
  View,
  StyleSheet,
  TextInput,
  ImageBackground,
} from 'react-native';
import {SearchBar} from 'react-native-elements';
import CountdownCircle from 'react-native-countdown-circle';
import CircleWeek from './CirlceWeek';
class Header extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
  }

  updateSearch = (search) => {
    this.setState({search});
  };
  render() {
    const {search} = this.state;
    return (
      <View>
        <ImageBackground
          style={{width: '100%', height: 310}}
          source={require('../contentImage/headerX.png')}>
          <View style={styles.container}>
            <View>
              <TextInput />
              <Image
                style={styles.searchImage}
                source={require('../contentImage/Group.png')}
              />
            </View>
            <Image
              style={styles.notif}
              source={require('../contentImage/notifications-24px.png')}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 40,
    marginTop: 55,
  },
  searchButton: {
    backgroundColor: '#979797',
    marginTop: 55,
    marginHorizontal: 90,
    borderRadius: 25,
    flexDirection: 'row',
    height: 44,
  },
  searchImage: {
    position: 'absolute',
    right: 20,
    marginVertical: 15,
    height: 15,
  },
});
