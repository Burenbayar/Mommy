import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class ToolsScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    header: false,
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.header}>
          <View style={{marginLeft: '5%'}}>
            <Entypo
              name="menu"
              color="#D8D8D8"
              size={30}></Entypo>
          </View>
          
          <View>
            <Text
              style={{
                fontSize: 22,
                fontWeight: 'bold',
                fontFamily: 'roboto',
                marginLeft: 5,
              }}>
              МИНИЙ ХЭРЭГСЭЛ
            </Text>
          </View>

          <View style={{flex:1, alignItems: "flex-end", justifyContent: "center", marginRight: '5%'}}>
            <MaterialIcons
              name="notifications"
              color="#D8D8D8"
              size={30}></MaterialIcons>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.redView}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('cameraScreen')}>
              <Image
                style={styles.Img}
                source={require('./picture/camera_enhance-1.png')}
              />
              <Text style={styles.texta}>Жирэмсний зураг оруулах </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('beltgelScreen')}>
              <Image
                style={styles.Img}
                source={require('./picture/pregnant_woman-24px.png')}
              />
              <Text style={styles.texta}>Төрөх бэлтгэл</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('namesScreen')}>
              <Image
                source={require('./picture/child_care-24px.png')}
                style={styles.Img}
              />
              <Text style={styles.texta}>Хүүхдэд нэр өгөх</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.greenView}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('namesScreen')}>
              <Image
                source={require('./picture/insert_chart-24px.png')}
                style={styles.Img}
              />
              <Text style={styles.texta}>Биеийн жингийн хяналт</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('tsagScreen')}>
              <Image
                source={require('./picture/local_hospital-24px.png')}
                style={styles.Img}
              />
              <Text style={styles.texta}>Төрөхийн базлалтаа хянах</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('namesScreen')}>
              <Image
                source={require('./picture/help-24px.png')}
                style={styles.Img}
              />
              <Text style={styles.texta}>Тусламж</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'stretch',
    flexDirection: 'row',
    backgroundColor: '#F4F4F4',
  },

  header: {
   // backgroundColor: 'red',
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
  },
  texta: {
    fontSize: 14,
    marginLeft: '5%',
    marginBottom: '5%',
  },
  redView: {
    //backgroundColor: 'red',
    flex: 1,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-13%',
  },
  greenView: {
    // backgroundColor: 'green',
    flex: 1,
    alignContent: 'stretch',
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-13%',
  },
  button: {
    marginTop: '10%',
    borderRadius: 10,
    width: '80%',
    height: '25%',
    backgroundColor: '#FFFFFF',
    elevation: 1,
    justifyContent: 'flex-end',
  },
  Img: {
    marginLeft: '5%',
    position: 'absolute',
    top: '5%',
    left: '0%',
  },
});
