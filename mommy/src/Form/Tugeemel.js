import React, {Component} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Story from './story';

const obj = require('./DB');

const formatData = (data) => {
  if (data.length % 2 != 0)
    data.push({
      userId: `what the hell are you ??????? blank-${Math.random() * 100 + 1}`,
      empty: true,
    });
  return data;
};

class Tugeemel extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.container}
          numColumns={2}
          keyExtractor={(item) => item.userId}
          data={formatData(obj)}
          renderItem={({item}) => {
            if (item.empty == true) return <Story nothing={true} />;
            return (
              <Story
                title={item.title}
                pDate={item.pDate}
                proImage={item.proImage}
                backImage={item.backImage}
              />
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
    padding: '1%',
    backgroundColor: '#cecece',
  },
});

export default Tugeemel;
