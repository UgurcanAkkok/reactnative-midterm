import {StyleSheet} from 'react-native';
export const API_URL = 'https://jsonplaceholder.typicode.com/';

export const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: 'black',
    paddingVertical: 3,
  },
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#fff',
    flexBasis: '100%',
    paddingBottom: 10,
  },
  button: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    paddingBottom: 100,
    justifyContent: 'center',
  },
});
