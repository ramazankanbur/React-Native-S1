import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';

import BlogPostForm from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context);
  const blogPostId = navigation.getParam('id');
  const blogPost = state.find(blogPost => blogPost.id === blogPostId);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(blogPostId, title, content, () => {
          navigation.pop();
        });
      }}
    />
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: ''
  }
};

const styles = StyleSheet.create({});

export default EditScreen;
