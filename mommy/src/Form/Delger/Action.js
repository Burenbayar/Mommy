import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ic from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Action = (props) => {
  const [heartType, fill] = useState(false);

  const formater = (too) => {
    too = '' + too;
    const x = too.split('').reverse().join('');

    let y = '';
    let count = 1;

    for (let i = 0; i < x.length; i++) {
      y = y + x[i];

      if (count % 3 === 0) y = y + ',';
      count++;
    }

    let z = y.split('').reverse().join('');

    if (z[0] === ',') z = z.substr(1, z.length - 1);

    return z;
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: wp('3.6%'), color: '#7E7E7E'}}>{props.date}</Text>
      <View style={styles.act}>
        <View>
          <TouchableWithoutFeedback
            onPress={() => fill(heartType ? false : true)}>
            <Ic
              name="md-heart"
              size={25}
              color={heartType ? '#FA3D5A' : '#7E7E7E'}
            />
          </TouchableWithoutFeedback>
        </View>
        <View style={{marginHorizontal: 10}}>
          <Icon name="comment-text" size={25} color="#7E7E7E" />
        </View>
        <View>
          <Text
            style={{
              fontSize: wp('3.5%'),
              fontWeight: 'bold',
              color: '#C3C3C3',
            }}>
            {formater(props.commentQuantity)}
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'transparent',
    //backgroundColor: 'yellow',
  },
  act: {
    //width: '20%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    //backgroundColor: 'red',
  },
});

export default Action;
