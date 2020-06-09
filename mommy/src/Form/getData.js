import React from 'react';
import {View, Text} from 'react-native';
class getData extends React.Component {
  state = {
    items: '',
  };

  get = () => {
    fetch('https://jsonplaceholder.typicode.com/users#')
      .then((response) => response.json())
      .then((data) => this.setState({items: data}));

    // fetch('http://192.168.5.94:8082/mama/maNews', {
    //   method: 'GET',
    // })
    //   .then((response) => response.json())
    //   .then((json) => this.setState({items: json.entity}))
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };
  render() {
    this.get();
    console.log(this.state.items);
    return (
      <View style={{width: 100, height: 100, backgroundColor: 'red'}}>
        <Text style={{fontSize: 15}}> {this.state.items} </Text>
      </View>
    );
  }
}

export default getData;
