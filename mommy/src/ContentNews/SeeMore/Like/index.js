import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Maticon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Like = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [value, setValue] = useState(false);
  const [disValue, setDisValue] = useState(false);
  const likeHandle = () => {
    setValue(!value);
    value ? setLikeCount(likeCount - 1) : setLikeCount(likeCount + 1);
  };
  const dislikeHandle = () => {
    setDisValue(!disValue);
    disValue
      ? setDislikeCount(dislikeCount - 1)
      : setDislikeCount(dislikeCount + 1);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        marginLeft: wp('43%'),
        marginVertical: hp('1%'),
        alignItems: 'center',
      }}>
      <View style={{flexDirection: 'row', marginLeft: wp('-12%')}}>
        <TouchableOpacity onPress={() => likeHandle()}>
          {value ? (
            <Maticon name="thumb-up" size={22} color="#FA3D5A" />
          ) : (
            <Maticon name="thumb-up" size={22} color="#9E9898" />
          )}
        </TouchableOpacity>
        <Text style={{color: '#9E9898', marginLeft: wp('2%s')}}>
          {likeCount}
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginLeft: wp('8%')}}>
        <TouchableOpacity onPress={() => dislikeHandle()}>
          {disValue ? (
            <Maticon name="thumb-down" size={22} color="#FA3D5A" />
          ) : (
            <Maticon name="thumb-down" size={22} color="#9E9898" />
          )}
        </TouchableOpacity>
        <Text style={{color: '#9E9898', marginLeft: wp('2%')}}>
          {dislikeCount}
        </Text>
      </View>
    </View>
  );
};
export default Like;
