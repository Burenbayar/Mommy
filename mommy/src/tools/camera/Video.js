import React, {Component} from 'react';
import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Text,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {ActionSheet, Root} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const numColumns = 2;
const width = Dimensions.get('window').width;
export default class VideoScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fileList: [],
    };
  }

  renderItem = ({item, index}) => {
    let {itemViewImage, itemImage} = styles;

    return (
      <View style={itemViewImage}>
        <Image source={item.url} style={itemImage} />
      </View>
    );
  };

  onClickAddPicture = () => {
    const BUTTONS = ['Take Video', 'Choose from Library', 'Cancel'];
    ActionSheet.show(
      {options: BUTTONS, cancelButtonIndex: 2, title: 'Select a Video'},
      (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            this.takePhotoFromCamera();
            break;
          case 1:
            this.choosePhotoFromLibrary();
            break;
          default:
        }
      },
    );
  };

  choosePhotoFromLibrary() {
    // ImagePicker.openPicker({
    //   width: 300,
    //   height: 400,
    //   cropping: true

    ImagePicker.openPicker({
      mediaType: 'video',
    })
      .then((video) => {
        console.log('Choose Video Object: ', video);
        this.onSelectedImage(video); //
      })
      .catch((error) => console.log('Choose Video Error', error));

    // cropping: false,
    // includeBase64: true,
    // compressImageMaxWidth: 500,
    // compressImageMaxHeight: 500,
    // compressImageQuality: 0.7
    // }).then(image => {
    //   console.log("Choose Photo Object: ", image);
    //   this.onSelectedImage(image)
    // }).catch(error =>
    //     console.log("Choose Photo Error: ", error)
    // );
  }

  takePhotoFromCamera() {
    // ImagePicker.openCamera({
    //   width: 300,
    //   height: 400,
    //   cropping: true

    ImagePicker.openCamera({
      mediaType: 'video',
    })
      .then((image) => {
        console.log('Take Video Object: ', image);
        this.onSelectedImage(image);
      })
      .catch((error) => console.log('Take Video Error', error));

    // cropping: false,
    // includeBase64: true,
    // compressImageMaxWidth: 500,
    // compressImageMaxHeight: 500,
    // compressImageQuality: 0.7
    // }).then(image => {
    //   console.log("Take Photo Object: ", image);
    //   this.onSelectedImage(image)
    // }).catch(error =>
    //     console.log("take Photo Error: ", error)
    // );
  }

  onSelectedImage(image) {
    let newDataImg = this.state.fileList;
    const source = {uri: video.path};
    let item = {
      id: Date.now(),
      url: source,
      content: video.data,
    };
    newDataImg.push(item);
    this.setState({fileList: newDataImg});
  }

  render() {
    const {content} = styles;
    let {fileList} = this.state;
    return (
      <Root>
        <View style={content}>
          <Text>React Native Add Video</Text>
          <FlatList
            data={fileList}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
            extraData={this.state}
            numColumns={numColumns}
          />
          <View style={styles.MainContainer}>
            <TouchableOpacity
              onPress={() => this.onClickAddPicture()}
              style={{width: '80%'}}>
              <LinearGradient
                colors={['#F36227', '#EE227C']}
                style={styles.LinearGradientStyle}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0.9}}
                locations={[0, 1]}>
                <Text style={styles.buttonText}>ЗУРАГ ОРУУЛАХ</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          {/* <TouchableOpacity
            style={btnPressStyle}
            onPress={() => this.onClickAddPicture()}>
            <Text style={{color: '#fff'}}>Бичлэг оруулах</Text>
          </TouchableOpacity> */}
        </View>
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#F4F4F4',
    flex: 1,
    alignContent: 'center',
    height: width / numColumns,
  },
  itemViewImage: {
    backgroundColor: '#F4F4F4',

    alignItems: 'center',
    borderRadius: 8,
   
  },
  itemImage: {
    //backgroundColor: '#2F455C',
    width: wp('46%'),
    height: wp('46%'),
    borderRadius: 8,
    resizeMode: 'contain',
  },
  MainContainer: {
    height: '23%',
    backgroundColor: '#F4F4F4',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    color: '#fff',
    backgroundColor: 'transparent',
  },
  LinearGradientStyle: {
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  //   btnPressStyle: {
  //     backgroundColor: '#0080ff',
  //     height: 50,
  //     width: width - 60,
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },
});
