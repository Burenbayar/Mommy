// import React from 'react';
// import {View, Text, Modal, Button, TextInput} from 'react-native';
// export default class jin extends React.Component {
//     constructor(){
//         super();
//         this.state={
//             show: false
//         }
//     }
//   render() {
//     return (
//       <View style={{flex: 1, marginTop: 100}}>
//         <Text style={{fontSize: 80}}>Normal Screen</Text>
//         <Button title='show modal' onPress={()=> {this.setState({show:true })}}
//         ></Button>
//         <Modal transparent={true} 
//         visible={this.state.show}>
//           <View style={{backgroundColor: '#000000aa', flex: 1}}>
//             <View style={{backgroundColor: '#ffffff', margin:50, padding:40, borderRadius:25, flex:1}}>
//               <Text style={{fontSize: 50}}>Modal Screen</Text>
//               <TextInput style={{  fontSize:12}}/>
//               <Button title='close modal' onPress={()=>{this.setState({show:false})}} />
//             </View>
//           </View>
//         </Modal>
//       </View>
//     );
//   }
// }
import React, { Component } from 'react';
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard  } from 'react-native';

export default class jin extends React.Component  {
  constructor(){
    super();
  }
  render(){
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <TextInput placeholder="Username" style={styles.textInput} />
          <View >
            <Button title="Submit" onPress={() => null} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor:'red'
  },
  inner: {
    backgroundColor:'yellow',
    padding: 24,
    flex: 1,
    justifyContent: "space-around"
  },
  textInput: {
    backgroundColor:'green',
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
   
  },
});

