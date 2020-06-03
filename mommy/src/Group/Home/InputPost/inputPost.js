import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import Modal from 'react-native-modal';
import InputPostModal from './inputPostModal';

class InputPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      resourcePath: {},
      isModalVisible: false,
    };
  }

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  componentDidUpdate() {
    this.toggleModal;
  }

  selectFile = () => {
    var options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (res) => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        let source = res;
        this.setState({
          resourcePath: source,
        });
        this.toggleModal();
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image
            style={styles.profileImg}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          <TextInput
            onFocus={true}
            multiline={true}
            numberOfLines={4}
            style={{flex: 1}}
            placeholder="Нийтлэл бичих"
            onFocus={this.toggleModal}
          />
        </View>

        <View style={styles.bottom}>
          <Icon.Button
            name="eye"
            backgroundColor="white"
            color="gray"
            size={20}
            style={styles.inputButton}>
            Live
          </Icon.Button>
          <Icon.Button
            name="photo"
            backgroundColor="white"
            color="gray"
            size={20}
            style={styles.inputButton}
            onPress={this.selectFile}>
            Photo
          </Icon.Button>
          <Icon.Button
            name="video-camera"
            backgroundColor="white"
            color="gray"
            size={20}
            style={styles.inputButton}>
            Video
          </Icon.Button>
        </View>
        {/* <View style={{ alignItems: "center" }}>
                    <Image
                        source={{ uri: this.state.resourcePath.uri }}
                        style={{ width: "100%", height: 400 }}
                    />
                    <Text style={{ alignItems: 'center' }}     >
                        {this.state.resourcePath.uri}
                    </Text>
                </View> */}

        <Modal
          animationType={'slide'}
          transparent={true}
          isVisible={this.state.isModalVisible}
          style={styles.modal}>
          <InputPostModal
            cancelModal={this.toggleModal}
            src={this.state.resourcePath}
            txt={this.state.text}
          />
        </Modal>
      </View>
    );
  }
}

export default InputPost;
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    width: width * 0.95,
    flex: 1,
    alignSelf: 'center',
    borderRadius: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    height: height * 0.1,
    borderBottomColor: '#F5F5F5',
    backgroundColor: 'white',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  profileImg: {
    height: 40,
    width: 40,
    borderRadius: 25,
    margin: 6,
  },
  photo: {
    alignItems: 'flex-end',
    marginHorizontal: 32,
  },
  bottom: {
    height: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    height: height * 0.05,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  inputButton: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  modal: {
    width: width * 0.95,
    flex: 0,
    marginVertical: '50%',
    alignSelf: 'center',
    alignItems: 'center',
  },
});
