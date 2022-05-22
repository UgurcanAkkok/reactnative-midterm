/* eslint-disable react-native/no-inline-styles */
import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button} from 'react-native-elements';
import {API_URL, styles} from '../env/config';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PostDetail from '../PostDetail/PostDetail';

const Stack = createNativeStackNavigator();

const PostList = ({navigation}) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getPosts();
  }, []);

  const goToDetail = id => {
    navigation.navigate('PostDetail', {postId: id});
  };

  const getPosts = () => {
    fetch(API_URL + 'posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      });
  };

  return (
    <View>
      {loading ? (
        <Text style={styles.text}>Loading...</Text>
      ) : (
        <FlatList
          data={posts.slice(0, 20)}
          container={styles.container}
          renderItem={({item}) => {
            return (
              <Button
                title={item.title}
                onPress={() => goToDetail(item.id)}
                titleStyle={{fontSize: 20}}
                buttonStyle={styles.button}
              />
            );
          }}
        />
      )}
    </View>
  );
};

const PostListStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PostList" component={PostList} />
      <Stack.Screen name="PostDetail" component={PostDetail} />
    </Stack.Navigator>
  );
};

export default PostListStack;
