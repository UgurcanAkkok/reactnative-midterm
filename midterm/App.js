import React from 'react';
import {Text, View} from 'react-native';
import UserDetail from './src/UserDetail/UserDetail';
import UserList from './src/UserList/UserList';

const App = () => {
  return (
    <>
      <View>
        <UserList />
      </View>
    </>
  );
};

export default App;
