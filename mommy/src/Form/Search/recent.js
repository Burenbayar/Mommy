import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableNativeFeedback,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ficon from 'react-native-vector-icons/Feather';

class Recent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recents: [],
      focus: true,
    };
  }

  componentDidMount = () => {
    this.setState({recents: require('./history')});
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{paddingRight: 10}}
          keyExtractor={(item) => item.id}
          data={this.state.recents}
          renderItem={({item}) => {
            return (
              <TouchableNativeFeedback
                onPress={() => console.log(item.value)}
                style={styles.item}
                useForeground={false}
                background={TouchableNativeFeedback.Ripple('#5F5F5F')}>
                <View style={styles.item}>
                  <Ficon name="search" size={wp('4%')} color="#9E9898" />
                  <Text style={{marginHorizontal: 10}}>
                    {item.value.length < 50
                      ? item.value
                      : item.value.slice(0, 45) + '...'}
                  </Text>
                </View>
              </TouchableNativeFeedback>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  item: {
    flexDirection: 'row',
    margin: 1,
    width: '100%',
    // backgroundColor: 'gray',
    height: hp('5%'),
    paddingHorizontal: 10,
    // marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default Recent;
