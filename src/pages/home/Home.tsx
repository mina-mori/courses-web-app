import React from 'react';
import './Home.scss';

const Home: React.FC = () => {
  return (
    <div className='home-container'>
      <h1 className='title'>Welcome to Programming Courses</h1>
      <p className='description'>
        Explore a variety of programming courses to enhance your skills.
      </p>
    </div>
  );
};

export default Home;
