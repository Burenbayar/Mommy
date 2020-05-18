import React, {useState} from 'react';
import {Modal, View, Text, Button} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import test from './images/testBack.jpg';

const images = [
  {
    url: '',
    props: {
      // Or you can set source directory.
      source: test,
    },
  },
  {
    url: '',
    props: {
      // Or you can set source directory.
      source: test,
    },
  },
  {
    url: '',
    props: {
      // Or you can set source directory.
      source: test,
    },
  },
];

const Test = (props) => {
  //   state = {
  //     modalType: false,
  //   };
  const [modalType, showModal] = useState(false);
  //   showModal = () =>
  //     this.state.modalType
  //       ? this.setState({modalType: false})
  //       : this.setState({modalType: true});

  return (
    <View
      style={{flex: 1, width: '100%', height: 705, backgroundColor: 'green'}}>
      <Text>sda</Text>
      <Button
        title="dar pisda mine"
        onPress={() => showModal(modalType ? false : true)}></Button>
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
export default Test;
