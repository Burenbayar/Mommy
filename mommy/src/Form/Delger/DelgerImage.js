import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  Dimensions,
  View,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ImageViewer from 'react-native-image-zoom-viewer';

const {width} = Dimensions.get('window');
const SIZE = width;

const DelgerImage = (props) => {
  const [modalType, showModal] = useState(false);
  const images = [
    {
      url: '',
      props: {
        source: props.image,
      },
    },
  ];
  return (
    <View style={{alignSelf: 'center'}}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => showModal(modalType ? false : true)}>
        <Image
          //source={props.back}
          source={props.image}
          style={styles.backImage}
        />
      </TouchableOpacity>
      <Modal visible={modalType} transparent={false}>
        <View
          style={{
            width: '100%',
            height: 40,
            // backgroundColor: 'yellow',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              borderRadius: 20,
              marginRight: 10,
              //backgroundColor: 'red',
              width: 30,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => showModal(modalType ? false : true)}>
            <Icon name="ios-close" size={45} color="#7E7E7E" />
          </TouchableOpacity>
        </View>
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
