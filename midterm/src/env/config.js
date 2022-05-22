import {StyleSheet} from 'react-native';
export const API_URL = 'https://jsonplaceholder.typicode.com/';

export const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    textAlignVertical: 'center',
    color: 'black',
  },
  container: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    flexBasis: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    color: '#fff',
  },
  button: {
    color: 'red',
    backgroundColor: 'red',
  },
});
