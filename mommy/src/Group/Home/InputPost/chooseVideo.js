import React from 'react';
import {View, Text, Image, Button, TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {AddInput} from './addInput';
import Icon from 'react-native-vector-icons/FontAwesome';

class ChooseVideo extends React.Component {
  state = {
    photo: null,
  };

  handleChoosePhoto = () => {
    const options = {
      mediaType: 'video',
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.uri) {
        this.setState({photo: response});
      }
    });
  };

  render() {
    const {photo} = this.state;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {photo && (
          <Image source={{uri: photo.uri}} style={{width: 300, height: 300}} />
        )}
        <AddInput
          uildel={this.handleChoosePhoto}
          name="video-camera"
          title="Video"
        />
      </View>
    );
  }
}

export default ChooseVideo;
