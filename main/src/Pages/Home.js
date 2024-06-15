import React from 'react';
import '../style/home.css';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <h1>Welcome to My Blog</h1>
      <p>This is the home page.</p>
    </div>
  );
};

export default Home;
