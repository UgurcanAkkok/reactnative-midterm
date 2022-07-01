import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {API_URL, styles} from '../env/config';
import {Button, Card} from 'react-native-elements';

const PostDetail = ({route, navigation}) => {
  const postId = route.params.postId;
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getPost(postId);
  }, [postId]);

  const getPost = id => {
    fetch(API_URL + 'posts/' + id)
      .then(res => res.json())
      .then(data => {
        setPost(data);
        setLoading(false);
      });
  };
  const goToComment = id => {
    navigation.push('Comments', {postId: id});
  };
  return (
    <View>
      {loading ? (
        <Text> Loading... </Text>
      ) : (
        <Card>
          <Card.Title h4={true}>{post.title}</Card.Title>
          <Card.Divider />
          <Button
            buttonStyle={styles.button}
            title={post.body}
            onPress={() => goToComment(postId)}
          />
        </Card>
      )}
    </View>
  );
};

export default PostDetail;
