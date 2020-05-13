import React, {Component} from 'react';
import {
  Animated,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TabBar from 'react-native-underline-tabbar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {SafeAreaView} from 'react-navigation';
const Tab = ({tab, page, isTabActive, onPressHandler, onTabLayout}) => {
  const {label} = tab;
  const style = {
    marginHorizontal: wp('1%'),
    paddingVertical: wp('2%'),
  };
  const active = {
    backgroundColor: 'white',
    paddingHorizontal: wp('3.2%'),
    paddingVertical: wp('2%'),
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
  };
  const notActive = {
    backgroundColor: '#F4F4F4',
    paddingHorizontal: wp('3.2%'),
    paddingVertical: wp('2%'),
    flexDirection: 'row',
    alignItems: 'center',
  };

  return (
    <TouchableOpacity
      onPress={onPressHandler}
      onLayout={onTabLayout}
      style={style}
      key={page}>
      <View style={isTabActive ? active : notActive}>
        <Text>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};
const Page = ({label}) => (
  <View style={styles.containerr}>
    <View>
      <TouchableOpacity>
        <ImageBackground
          style={{
            width: '100%',
            height: hp('20%'),
            justifyContent: 'flex-start',
          }}
          imageStyle={{borderRadius: 15}}
          source={require('../contentImage/newsImage.png')}></ImageBackground>
      </TouchableOpacity>
    </View>
    <View style={styles.text}>
      <View style={styles.dateName}>
        <Text style={styles.name}>ddddd</Text>
        <Text style={styles.date}>dddd</Text>
      </View>
      <TouchableOpacity style={styles.heart}>
        <View>
          <Icon name="md-heart" size={25} color="#FA3D5A"></Icon>
        </View>
      </TouchableOpacity>
    </View>
  </View>
);
class SavedNews extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Icon
              size={wp('7%')}
              name={'ios-arrow-back'}
              color="#9E9898"></Icon>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: wp('6%'),
              marginLeft: wp('5%'),
            }}>
            ХАДГАЛСАН
          </Text>
          <TouchableOpacity style={styles.notif}>
            <Icon
              name="ios-notifications"
              size={wp('7%')}
              color="#9E9898"></Icon>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ScrollableTabView
            tabBarActiveTextColor="#53ac49"
            renderTabBar={() => (
              <TabBar
                underlineColor="#F4F4F4"
                renderTab={(
                  tab,
                  page,
                  isTabActive,
                  onPressHandler,
                  onTabLayout,
                ) => (
                  <Tab
                    key={page}
                    tab={tab}
                    page={page}
                    isTabActive={isTabActive}
                    onPressHandler={onPressHandler}
                    onTabLayout={onTabLayout}
                  />
                )}
              />
            )}>
            <Page tabLabel={{label: 'Мэдээлэл'}} />
            <Page tabLabel={{label: 'Эмч'}} />
            <Page tabLabel={{label: 'Байгууллага'}} />
            <Page tabLabel={{label: 'Видео'}} />
          </ScrollableTabView>
        </View>
      </View>
    );
  }
}

export default SavedNews;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginTop: hp('4%'),
    marginHorizontal: wp('8%'),
    alignItems: 'center',
  },
  container: {
    flexDirection: 'column',
  },
  notif: {
    position: 'absolute',
    right: 0,
  },
  containerr: {
    margin: wp('2.4%'),
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
