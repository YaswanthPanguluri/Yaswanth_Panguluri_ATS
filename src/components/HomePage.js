import React from 'react';
import '../styles/Yaswanth.css';
import Content from './Content';

const HomePage = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center">Application Tracking System</h1>
      <div className="row">
        <div className="col-md-12">
          <Content />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
