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

  return (
    <View style={styles.container}>
      <Text style={{fontSize: wp('3.6%'), color: '#7E7E7E'}}>
        {props.pDate}
      </Text>
      <View style={styles.act}>
        <TouchableWithoutFeedback
          onPress={() => fill(heartType ? false : true)}>
          <Ic name="md-heart" size={24} color={heartType ? 'red' : '#7E7E7E'} />
        </TouchableWithoutFeedback>
        <Icon name="comment-text" size={24} color="#7E7E7E" />
        <Text
          style={{fontSize: wp('5%'), fontWeight: 'bold', color: '#C3C3C3'}}>
          {props.commentQuantity}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'transparent',
    //backgroundColor: 'yellow',
  },
  act: {
    width: wp('20%'),
    justifyContent: 'space-between',
    flexDirection: 'row',
    //backgroundColor: 'red',
  },
});

export default Action;
