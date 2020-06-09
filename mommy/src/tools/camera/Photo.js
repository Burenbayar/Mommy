import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-crop-picker';
import {ActionSheet, Root} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const numColumns = 2;
const width = Dimensions.get('window').width;

export default class PhotoScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fileList: [],
      Num:[1,2,3,4,5,6,7,8,9,10],
      index: -1,
    };
  }
  renderItem = ({item, index}) => {
    let {itemViewImage, itemImage} = styles;

    return (
      <View style={itemViewImage}>
        <Image source={item.url} style={itemImage} />
        <Text style={styles.Num}>{this.state.Num[index]}</Text>
      </View>
    );
  };

  onClickAddPicture = () => {
    const BUTTONS = ['Take Photo', 'Choose from Library', 'Cancel'];
    ActionSheet.show(
      {options: BUTTONS, cancelButtonIndex: 2, title: 'Select a Photo'},
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
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      // cropping: false,
      // includeBase64: true,
      // compressImageMaxWidth: 500,
      // compressImageMaxHeight: 500,
      // compressImageQuality: 0.7
    })
      .then((image) => {
        console.log('Choose Photo Object: ', image);
        this.onSelectedImage(image);
      })
      .catch((error) => console.log('Choose Photo Error: ', error));
  }

  takePhotoFromCamera() {
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
      // cropping: false,
      // includeBase64: true,
      // compressImageMaxWidth: 500,
      // compressImageMaxHeight: 500,
      // compressImageQuality: 0.7
    })
      .then((image) => {
        console.log('Take Photo Object: ', image);
        this.onSelectedImage(image);
      })
      .catch((error) => console.log('take Photo Error: ', error));
  }

  onSelectedImage(image) {
    let newDataImg = this.state.fileList;
    const source = {uri: image.path};
    let item = {
      id: Date.now(),
      url: source,
      content: image.data,
    };
    newDataImg.push(item);
    this.setState({fileList: newDataImg});
    this.setState({index: this.state.index+1})
  }

  render() {
    const {content, btnPressStyle} = styles;
    let {fileList} = this.state;
    return (
      <Root>
        <View style={content}>
          <FlatList
            style={{backgroundColor: '#F4F4F4', marginTop:10}}
            data={fileList}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
            extraData={this.state}
            numColumns={numColumns}>
            </FlatList>
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
        </View>
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  Num:{
    marginTop:-150,
    // backgroundColor:'red',
    color:'#ffffff50',
    fontSize:wp('24%'),
    height:150,
    fontWeight:'bold',
  },
  content: {
    backgroundColor: '#F4F4F4',
    flex: 1,
    alignContent: 'center',
    height: width / numColumns,
  },
  itemViewImage: {
    backgroundColor: '#F4F4F4',
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 8,
  },
  itemImage: {
    width: wp('46%'),
    height: wp('46%'),
    borderRadius: 8,
    margin: '2%',
    resizeMode: 'stretch',
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
  // btnPressStyle: {
  //   backgroundColor: 'green',
  //   borderRadius: 8,
  //   height: 50,
  //   width: width - 60,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
