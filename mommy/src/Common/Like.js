import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Maticon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// const data = {
//   clicked: -1,
//   like: 30,
//   dislike: 20,
// };

const Like = (props) => {
  const [likeCount, setLikeCount] = useState(props.info.like);
  const [dislikeCount, setDislikeCount] = useState(props.info.dislike);
  const [value, setValue] = useState(props.info.clicked === 1 ? true : false);
  const [disValue, setDisValue] = useState(
    props.info.clicked === -1 ? true : false,
  );
  // console.warn(props.size);
  const likeHandle = () => {
    setValue(!value);
    value ? setLikeCount(likeCount - 1) : setLikeCount(likeCount + 1);
    if (disValue) dislikeHandle();
  };
  const dislikeHandle = () => {
    setDisValue(!disValue);
    disValue
      ? setDislikeCount(dislikeCount - 1)
      : setDislikeCount(dislikeCount + 1);
    if (value) likeHandle();
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp('-1%'),
        // backgroundColor: 'gray',
        // flex: 1,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => likeHandle()}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <Maticon
            name="thumb-up"
            size={props.size}
            color={value ? '#FA3D5A' : '#9E9898'}
          />

          <Text style={styles.too}>{likeCount}</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: wp('4%'),
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => dislikeHandle()}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <Maticon
            name="thumb-down"
            size={props.size}
            color={disValue ? '#FA3D5A' : '#9E9898'}
          />
          <Text style={styles.too}>{dislikeCount}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Like;

const styles = StyleSheet.create({
  too: {
    fontSize: 9,
    color: '#9E9898',
    marginLeft: wp('1%'),
  },
});
