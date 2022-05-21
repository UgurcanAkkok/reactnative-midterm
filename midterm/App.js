import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import PostList from './src/PostList/PostList';
import UserDetail from './src/UserDetail/UserDetail';
import UserListStack from './src/UserList/UserList';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="PostList" component={PostList} />
          <Tab.Screen name="UserList" component={UserListStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
