import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  Dimensions,
  View,
  TouchableOpacity,
  Modal,
} from 'react-native';
import test from './images/testBack.jpg';
import ImageViewer from 'react-native-image-zoom-viewer';

const {width} = Dimensions.get('window');
const SIZE = width - 16;

const images = [
  {
    url: '',
    props: {
      source: test,
    },
  },
];

const DelgerImage = (props) => {
  const [modalType, showModal] = useState(false);
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => showModal(modalType ? false : true)}>
        <Image
          //source={props.back}
          source={test}
          style={styles.backImage}
        />
      </TouchableOpacity>
      <Modal visible={modalType} transparent={true}>
        <ImageViewer
          imageUrls={images}
          backgroundColor="white"
          enableSwipeDown={true}
          onSwipeDown={() => showModal(modalType ? false : true)}
        />
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  backImage: {
    //borderRadius: 8,
    //resizeMode: 'cover',
    width: SIZE,
    height: 250,
  },
});

export default DelgerImage;
