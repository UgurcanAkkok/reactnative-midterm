import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Card, ListItem} from 'react-native-elements';
import {API_URL, styles} from '../env/config';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserList from '../UserList/UserList';


const Stack = createNativeStackNavigator();

const UserDetail = ({route, navigation}) => {
  const userId = route.params.userId;
  const name = route.name;
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    get_user(userId);
  }, [userId]);

  const get_user = id => {
    fetch(API_URL + 'users/' + id)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });
  };
  return (
    <View>
      <Card>
        <Card.Title h1={true}>{user.name}</Card.Title>
        {loading ? (
          <Text style={styles.text}>Loading..</Text>
        ) : (
          <ListItem containerStyle={styles.container}>
            <ListItem.Title style={styles.text}>
              Username: {user.username}
            </ListItem.Title>
            <ListItem.Title style={styles.text}>
              Email: {user.email}
            </ListItem.Title>
            <ListItem.Title style={styles.text}>
              Address: {user.address.city + ', ' + user.address.street}
            </ListItem.Title>
            <ListItem.Title style={styles.text}>
              Website: {user.website}
            </ListItem.Title>
            <ListItem.Title style={styles.text}>
              Company: {user.company.name}
            </ListItem.Title>
          </ListItem>
        )}
      </Card>
    </View>
  );
};

const UserDetailStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Users" component={UserList} />
      <Stack.Screen name="UserDetail" component={UserDetail} />
    </Stack.Navigator>
  );
};

export default UserDetail;
