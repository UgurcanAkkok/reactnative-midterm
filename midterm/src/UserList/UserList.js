import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, Card, ListItem} from 'react-native-elements';
import {API_URL, styles} from '../env/config';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserDetail from '../UserDetail/UserDetail';

const Stack = createNativeStackNavigator();

const UserList = ({navigation}) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    get_users();
  }, []);

  const goToDetail = id => {
    navigation.navigate('UserDetail', {userId: id});
  };

  const get_users = () => {
    fetch(API_URL + 'users/')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading..</Text>
      ) : (
        <FlatList
          data={users}
          renderItem={({item}) => {
            return (
              <Button
                title={item.name + ', ' + item.username}
                style={styles.button}
                onPress={() => goToDetail(item.id)}
              />
            );
          }}
        />
      )}
    </View>
  );
};

const UserListStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="UserList" component={UserList} />
      <Stack.Screen name="UserDetail" component={UserDetail} />
    </Stack.Navigator>
  );
};

export default UserListStackScreen;
