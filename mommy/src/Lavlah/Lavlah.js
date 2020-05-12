import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';
import Maticon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TabBar from 'react-native-underline-tabbar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import HospitalComponent from './HospitalComponent';
import SpecialNum from './SpecialNum';

const Tab = ({tab, page, isTabActive, onPressHandler, onTabLayout}) => {
  const {label} = tab;
  const style = {
    marginHorizontal: wp('1%'),
    paddingVertical: wp('2%'),
  };
  const active = {
    backgroundColor: 'white',
    paddingHorizontal: wp('2%'),
    paddingVertical: wp('2%'),
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
  };
  const notActive = {
    paddingHorizontal: wp('2%'),
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
  <HospitalComponent/>
);

class Lavlah extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
          <Icon size={wp('7%')} name={'ios-arrow-back'} color="grey"/>
          </TouchableOpacity>
          <Text style={styles.headText}>
            ЛАВЛАХ
          </Text>
          <TouchableOpacity style={styles.bell}>
          <Maticon size={wp('6%')} name={'bell'} color="grey"/>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ScrollableTabView tabBarActiveTextColor="#53ac49" renderTabBar={() => (
              <TabBar underlineColor="#F4F4F4" style={{marginLeft: wp('2.5%')}} renderTab={(
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
            <Page tabLabel={{label: 'Тусгай дугаар'}} />
            <Page tabLabel={{label: 'Эмнэлэг'}} />
            <Page tabLabel={{label: 'Хүүхдийн эмнэлэг'}} />
          </ScrollableTabView>
        </View>
      </View>
    )
  }
}

export default Lavlah;

const styles = StyleSheet.create({
  container:{
    flexDirection: 'column',
  },
  header:{
    flexDirection: 'row',
    marginTop: hp('4%'),
    marginHorizontal: wp('5%'),
    alignItems: 'center',
  },
  headText:{
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: wp('5%'),
  },
  bell:{
    position: 'absolute',
    right: 0,
  },
})
