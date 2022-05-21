import {View, Text, ScrollView, FlatList, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, Card} from 'react-native-elements';
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
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={posts.slice(0, 20)}
          contentContainerStyle={styles.container}
          renderItem={({item}) => {
            return (
              <Button
                title={item.title}
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

const PostListStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PostList" component={PostList} />
      <Stack.Screen name="PostDetail" component={PostDetail} />
    </Stack.Navigator>
  );
};

export default PostListStack;
