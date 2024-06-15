import React from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
  const { id } = useParams();
  const posts = [
    { id: 1, title: 'First Post', content: 'This is the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the second post.' }
  ];

  const post = posts.find(p => p.id === parseInt(id));

  if (!post) return <div>Post not found</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
