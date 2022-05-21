import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import PostListStack from './src/PostList/PostList';
import UserListStack from './src/UserList/UserList';

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="PostListStack" component={PostListStack} />
          <Tab.Screen name="UserListStack" component={UserListStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
