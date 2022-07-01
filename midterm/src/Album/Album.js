import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { API_URL, styles } from '../env/config';
import { Button, Card } from 'react-native-elements';

const Comments = ({ route, navigator }) => {
  var postId = route.params.postId;
  const [comments, setComments] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getComment(postId);
  }, [postId]);

  const getComment = id => {
    fetch(API_URL + 'posts/' + id + '/comments')
      .then(res => res.json())
      .then(data => {
        setComments(data);
        setLoading(false);
      });
  };
  return (
    <>
      {loading ? (
        <Text>Loading..</Text>
      ) : (
        <FlatList
          contentContainerStyle={styles.container}
          data={comments}
          renderItem={({ item }) => {
            return (
              <>
                <Text style={styles.text}>{{ item.name }}</Text>
                <Text style={styles.text}>{{ item.body }}</Text>
              </>
            )
          }}
        />
      )
      }
    </>
  )
}

export default Comments;
