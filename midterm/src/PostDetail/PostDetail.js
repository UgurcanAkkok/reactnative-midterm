import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {API_URL, styles} from '../env/config';
import {Card} from 'react-native-elements';

const PostDetail = ({route, navigator}) => {
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
  return (
    <View>
      {loading ? (
        <Text> Loading... </Text>
      ) : (
        <Card>
          <Card.Title h4={true}>{post.title}</Card.Title>
          <Card.Divider />
          <Text style={styles.text}>{post.body}</Text>
        </Card>
      )}
    </View>
  );
};

export default PostDetail;
