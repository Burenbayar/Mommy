import React, { Component } from 'react';
import { SafeAreaView, View, Text, TextInput, Image, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';

class InputPostModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      resourcePath: ""
    }
  }

  componentDidMount() {
    this.setState({
      text: this.props.txt,
      resourcePath: this.props.src
    });
    const closeModal = () => {
      this.props.cancelModal
    }
  }

  selectFile = () => {
    var options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, res => {
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
      }
    })
  }

  render() {
    // if (this.state.resourcePath.length !== 0)
    return (
      <View style={styles.container} >
        <View style={styles.header}>
          <TouchableOpacity onPress={this.closeModal}>
            <Text style={{ fontWeight: "500" }}>Нийтлэл оруулах</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.closeModal}>
            <Text style={{ fontSize: 28 }}>x</Text>
          </TouchableOpacity>
        </View>

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
            style={{ flex: 1 }}
            placeholder="Нийтлэл бичих" />
        </View>

        <View style={{
          height: "100%", flexDirection: "column", width: "90%"
        }}>
          <Image
            source={{ uri: this.state.resourcePath.uri }}
            style={{ width: "100%", height: 300 }}
          />
          <Text style={{ alignItems: 'center' }}     >
            {this.state.resourcePath.uri}
          </Text>
          <Text>
            {this.state.text}
          </Text>
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
      </View>
    );


  }
}

export default InputPostModal;
const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  container: {
    width: width * 0.95,
    height: height * 0.10,
    alignSelf: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
  },
  header: {
    flexDirection: 'row',
    height: height * 0.06,
    // backgroundColor: "red",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#F5F5F5",
    backgroundColor: "white",
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
    alignItems: "flex-end",
    marginHorizontal: 32
  },
  bottom: {
    height: 35,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  inputButton: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center"
  }
});
