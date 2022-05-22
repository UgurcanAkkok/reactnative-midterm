import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Card, ListItem} from 'react-native-elements';
import {API_URL, styles} from '../env/config';

const UserDetail = ({route, navigation}) => {
  const userId = route.params.userId;
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
          <ListItem containerStyle={[styles.container, {flexBasis: '50%'}]}>
            <ListItem.Title style={[styles.text, {flex: 2, fontSize: 20, fontWeight: 'bold'}]}>
              Username: {user.username}
            </ListItem.Title>
            <ListItem.Title style={[styles.text, {flex: 1}]}>
              Email: {user.email}
            </ListItem.Title>
            <ListItem.Title style={[styles.text, {flex: 1}]}>
              Address: {user.address.city + ', ' + user.address.street}
            </ListItem.Title>
            <ListItem.Title style={[styles.text, {flex: 1}]}>
              Website: {user.website}
            </ListItem.Title>
            <ListItem.Title style={[styles.text, {flex: 1}]}>
              Company: {user.company.name}
            </ListItem.Title>
          </ListItem>
        )}
      </Card>
    </View>
  );
};

export default UserDetail;
