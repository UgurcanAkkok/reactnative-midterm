import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, Card, ListItem} from 'react-native-elements';
import {API_URL, styles} from '../env/config';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    get_users();
  }, []);

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
              />
            );
          }}
        />
      )}
    </View>
  );
};

export default UserList;
