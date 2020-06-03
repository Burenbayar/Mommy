import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  Text,
  SafeAreaView,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Timer from '../Timer';
import SaveModal from '../SaveModal';
class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
      heartCheck: false,
      isRefreshing: false,
      modalVisible: false,
    };
  }
  handleHeart = (itemID) => {
    let data = this.state.items;
    data[itemID].heart = !data[itemID].heart;
    this.setState({items: data});
    this.state.heartCheck = data[itemID].heart;
    data[itemID].heart
      ? this.setState({second: 1})
      : this.setState({second: 0});
    this.handleModal();
  };
  formatData = (item) => {
    if (this.props.newsCheck) {
      item = item.filter((el) =>
        el.newsTitle.toLowerCase().includes(this.props.data.toLowerCase()),
      );
      return item;
    } else {
      return item;
    }
  };
  handleModal = () => {
    this.state.heartCheck
      ? this.setState({modalVisible: !this.state.modalVisible})
      : this.setState({modalVisible: this.state.modalVisible});
  };
  renderItem = ({item}) => {
    return (
      <View style={styles.container} key={item.newsId}>
        <View>
          <TouchableOpacity
            // disabled={this.props.scroll}
            onPress={() =>
              this.props.navigation.navigate('SeeMore', {
                data: item,
              })
            }>
            <ImageBackground
              style={{
                width: '100%',
                height: hp('28%'),
                justifyContent: 'flex-start',
              }}
              imageStyle={{borderRadius: 15}}
              source={item.image}>
              <Timer second={this.state.second} />
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.text}>
          <View style={styles.dateName}>
            <Text style={styles.name}>{item.newsTitle}</Text>
            <Text style={styles.date}>{item.newsDate}</Text>
          </View>
          <TouchableOpacity
            style={styles.heart}
            onPress={() => this.handleHeart(item.newsId)}>
            <View>
              {item.heart ? (
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
  onRefresh = () => {
    this.setState({
      isRefreshing: true,
    });
  };
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <FlatList
            data={this.formatData(this.state.items)}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.newsId}
          />
        </View>
        <SaveModal
          handleModal={this.handleModal}
          isModalVisible={this.state.modalVisible}
        />
      </ScrollView>
    );
  }
}

export default News;

const styles = StyleSheet.create({
  container: {
    margin: wp('2%'),
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
  },
  text: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  heart: {
    position: 'absolute',
    right: 10,
  },
  name: {
    fontSize: 14,
    fontFamily: 'Cochin',
  },
  date: {
    fontSize: 10,
    fontFamily: 'Cochin',
  },
  dateName: {
    marginLeft: 10,
  },
});
