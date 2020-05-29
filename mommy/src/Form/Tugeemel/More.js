import React, {Component} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Story from '../../Common/story';

const formatData = (data) => {
  if (data.length % 2 != 0)
    data.push({
      userId: ` blank-${Math.random() * 100 + 1}`,
      empty: true,
    });
  return data;
};

class More extends Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: '',
    };
    // this.setState({obj: props.navigation.getParam('obj')});
  }

  componentDidMount = () => {
    this.setState({obj: this.props.navigation.getParam('obj')});
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.container}
          numColumns={2}
          keyExtractor={(item) => item.userId} // eniig shalgah!
          data={formatData(this.state.obj)}
          renderItem={({item}) => {
            if (item.empty == true) return <Story nothing={true} />;
            return <Story nav={this.props.navigation} items={item} />;
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
    backgroundColor: 'transparent',
  },
});

export default More;
