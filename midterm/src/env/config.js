import {StyleSheet} from 'react-native';
export const API_URL = 'https://jsonplaceholder.typicode.com/';

export const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: 'black',
  },
  container: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    flexBasis: '90%',
    alignSelf: 'center',
    alignContent: 'space-around',
    color: '#fff',
  },
  button: {
    color: 'red',
  },
});
