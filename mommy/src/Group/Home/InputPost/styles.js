import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'gray',
    flexDirection: 'column',

    // alignItems: 'center',
    // justifyContent: 'center',
  },
  top: {
    height: 90,
    // width: '100%',
    flex: 2,
    backgroundColor: '#00ffff',
    flexDirection: 'row',
  },
  bottom: {
    height: 40,
    flex: 1,
    overflow: 'hidden',
    // width: '100%',
    backgroundColor: 'pink',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  img: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 1,
    margin: 5,
  },

  txt: {
    backgroundColor: 'purple',
    flex: 1,
  },

  gg: {
    flex: 1,
    marginVertical: 5,
  },

  addButton: {
    flex: 1,
  },
});

export {styles};
