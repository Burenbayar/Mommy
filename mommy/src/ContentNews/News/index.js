import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Text,
  FlatList,
} from 'react-native';
import newsJson from './newsJson';
import CircleWeek from '../CircleWeek';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      heartCheck: false,
    };
  }

  componentDidMount() {
    this.setState({items: newsJson});
  }
  handleHeart = () => {
    this.setState({heartCheck: !this.state.heartCheck});
  };
  formatData = (item) => {
    item = item.filter((el) =>
      el.name.toLowerCase().includes(this.props.data.toLowerCase()),
    );
    return item;
  };
  renderItem = ({item}) => {
    return (
      <View style={styles.container} key={item.id}>
        <View>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('SeeMore', {
                data: item,
              })
            }>
            <ImageBackground
              style={{
                width: '100%',
                height: hp('20%'),
                justifyContent: 'flex-start',
              }}
              imageStyle={{borderRadius: 15}}
              source={item.image}></ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.text}>
          <View>
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.date}</Text>
          </View>
          <TouchableOpacity style={styles.heart} onPress={this.handleHeart}>
            <View>
              {this.state.heartCheck ? (
                <Icon name="md-heart" size={25} color="#FA3D5A"></Icon>
              ) : (
                <Icon name="md-heart" size={25} color="#BEB5B5"></Icon>
              )}
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    return (
      <ScrollView>
        <View>
          <FlatList
            data={this.formatData(this.state.items)}
            renderItem={this.renderItem}
            maxHeight={3000}
            marginBottom={70}
          />
        </View>
      </ScrollView>
    );
  }
}

export default News;

const styles = StyleSheet.create({
  container: {
    margin: wp('2.4%'),
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
  },
  text: {
    flexDirection: 'row',
  },
  heart: {
    position: 'absolute',
    right: 10,
  },
  name: {
    fontSize: 18,
    fontFamily: 'Cochin',
  },
});
