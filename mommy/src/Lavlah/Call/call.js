import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";
import Maticon from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';
import Btton from '../../tools/name/Btton';

class Call extends Component {
    state = {
        modalVisible: false
    };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal visible={This.state.isModalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Өргөө амаржих газар</Text>
                <View>
                    <Maticon name='phone' size={wp('6%')} color="grey" />
                </View>
                <Text style={styles.modalText}>7011-2231</Text>
                <Btton/>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default Call;
