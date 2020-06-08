import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Maticon from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import LinearGradient from 'react-native-linear-gradient';



const Call =  (props) => {
    return (
      <View style={styles.centeredView}>
        <Modal isVisible ={props.isModalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
    <Text style={styles.modalText}>ere</Text>
                <View>
                    <Maticon name='phone' size={wp('6%')} color="grey" />
                </View>
    <Text style={styles.modalText}>1212</Text>
                <View style={styles.MainContainer}>
                    <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={props.handleModal}
                    style={{width: '80%'}}>
                    <LinearGradient
                        colors={['#F36227', '#EE227C']}
                        style={styles.LinearGradientStyle}
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0.9}}
                        locations={[0, 1]}>
                        <Text style={styles.buttonText}>Дуудлага хийх</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
          </View>
        </Modal>
      </View>
    );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    height:150,
    width: 200,
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
  },
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  LinearGradientStyle: {
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 14,
    color: '#fff',
    backgroundColor: 'transparent',
  },
});

export default Call;
