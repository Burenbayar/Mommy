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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default class ToolsScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    header: false,
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <View style={{marginLeft: '5%'}}>
            <Entypo name="menu" color="#00000080" size={30}></Entypo>
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

          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
              justifyContent: 'center',
              marginRight: '5%',
            }}>
            <MaterialIcons
              name="notifications"
              color="#00000080"
              size={30}></MaterialIcons>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.redView}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('cameraScreen')}>
              <MaterialIcons
                style={styles.Img}
                name="camera-enhance"
                color="#00000080"
                size={30}
              />
              <Text style={styles.texta}>Жирэмсний зураг оруулах </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('beltgelScreen')}>
              <MaterialIcons
                style={styles.Img}
                name="pregnant-woman"
                color="#00000080"
                size={30}
              />
              <Text style={styles.texta}>Төрөх бэлтгэл</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('namesScreen')}>
              <MaterialIcons
                style={styles.Img}
                name="child-care"
                color="#00000080"
                size={30}
              />
              <Text style={styles.texta}>Хүүхдэд нэр өгөх</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.greenView}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('jinScreen')}>
              <MaterialIcons
                style={styles.Img}
                name="insert-chart"
                color="#00000080"
                size={30}
              />
              <Text style={styles.texta}>Биеийн жингийн хяналт</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('tsagScreen')}>
              <MaterialIcons
                style={styles.Img}
                name="local-hospital"
                color="#00000080"
                size={30}
              />
              <Text style={styles.texta}>Төрөхийн базлалтаа хянах</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('namesScreen')}>
              <MaterialIcons
                style={styles.Img}
                name="help"
                color="#00000080"
                size={30}
              />
              <Text style={styles.texta}>Тусламж</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'stretch',
    flexDirection: 'row',
    backgroundColor: '#f4f4f4',
  },

  header: {
    backgroundColor: '#f4f4f4',
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
  },
  texta: {
    fontSize: 14,
    marginLeft: '5%',
    marginBottom: '5%',
    color:'#00000090'
  },
  redView: {
    flex: 1,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-13%',
  },
  greenView: {
    flex: 1,
    alignContent: 'stretch',
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-13%',
  },
  button: {
    marginTop: '10%',
    borderRadius: 8,
    width: wp('40%'),
    height: wp('40%'),
    backgroundColor: '#FFFFFF',
    elevation: 1,
    justifyContent: 'flex-end',
  },
  Img: {
    marginLeft: '5%',
    position: 'absolute',
    top: '5%',
  },
});
