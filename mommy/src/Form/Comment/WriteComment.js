import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableNativeFeedback,
} from 'react-native';
import Maticon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Pro} from '../BackUp/story';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import profilePic from '../images/tomPro.png';

class WriteComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setgegdel: '',
      hoosol: '',
    };
  }

  setText = (val) => {
    this.setState({setgegdel: val, hoosol: val});
  };
  clearField = () => {
    this.setState({hoosol: ''});
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <Pro proImage={profilePic} />
        </View>
        <View style={styles.input}>
          <View style={{width: '90%'}}>
            <TextInput
              placeholder="Сэтгэгдэл бичих"
              multiline
              autoCorrect={false}
              //autoFocus={true} //shalgaj uzeh!!!!!!!!!!!!!!!
              onChangeText={(e) => this.setText(e)}
              value={this.state.hoosol}
              style={{
                width: '88%',
                //height: '90%',
                //   backgroundColor: 'yellow',
                marginLeft: 20,
              }}
            />
          </View>
          <View style={styles.send}>
            <TouchableNativeFeedback
              useForeground={false}
              background={TouchableNativeFeedback.Ripple('#5F5F5F')}
              onPress={() => {
                this.clearField();
                alert(this.state.setgegdel);
              }}>
              <View style={styles.send}>
                <Maticon name="send" size={30} color={'#9E9898'} />
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    flex: 1,
    flexDirection: 'row',
    minHeight: 30,
    width: wp('94%'),
  },
  input: {
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
  send: {
    // backgroundColor: 'blue',
    borderRadius: 10,
    width: 50,
    height: 50,
    flex: 1,
    //alignSelf: 'center',
    // marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    bottom: 0,
    overflow: 'hidden',
  },
});

export default WriteComment;
