import {StyleSheet} from 'react-native';
export const API_URL = 'https://jsonplaceholder.typicode.com/';

export const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: 'black',
    paddingVertical: 3,
  },
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#fff',
    flexBasis: '90%',
  },
  button: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    paddingBottom: 10,
    justifyContent: 'center',
  },
});
