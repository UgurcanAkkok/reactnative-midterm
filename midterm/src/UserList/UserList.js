import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import {API_URL, styles} from '../env/config';
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
    <View>
      {loading ? (
        <Text>Loading..</Text>
      ) : (
        <FlatList
          contentContainerStyle={styles.container}
          data={users}
          renderItem={({item}) => {
            return (
              <Button
                buttonStyle={styles.button}
                title={item.name + ', ' + item.username}
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
