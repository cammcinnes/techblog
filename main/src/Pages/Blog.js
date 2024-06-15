import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Blog = () => {
  const posts = [
    { id: 1, title: 'First Post', content: 'This is the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the second post.' }
  ];

  return (
    <div>
        <Navbar/>
        <h1>Blog Posts</h1>
        <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;