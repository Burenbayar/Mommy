import React, {Component} from 'react';
import {
  Animated,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TabBar from 'react-native-underline-tabbar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import News from '../News';
import NewsComponent from '../../Common/NewsComponent/newsComponent';
import saveJson from './saveJson';
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
class SavedNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: saveJson,
      heartCheck: false,
      isRefreshing: false,
      scroll: false,
    };
  }
  scrollHandle = () => {
    this.setState({scroll: !this.state.scroll});
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Icon
              size={wp('8%')}
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
            // onScroll={this.scrollHandle}
            style={{width: '100%'}}
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
            <News
              items={this.state.items}
              newsCheck={false}
              tabLabel={{label: 'Мэдээлэл'}}
              navigation={this.props.navigation}
            />
            <NewsComponent tabLabel={{label: 'Эмч'}} />
            <News
              items={this.state.items}
              newsCheck={false}
              tabLabel={{label: 'Байгууллага'}}
              navigation={this.props.navigation}
            />
            <News
              items={this.state.items}
              newsCheck={false}
              tabLabel={{label: 'Видео'}}
              navigation={this.props.navigation}
            />
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
    marginHorizontal: wp('5%'),
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
