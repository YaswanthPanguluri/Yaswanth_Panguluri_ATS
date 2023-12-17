import React from 'react';
import '../styles/Yaswanth.css';
import Ats from './Ats';

const HomePage = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center">Yaswanth Panguluri </h1>


      <div className="row">
        <div className="col-md-12">
          <Ats />
        </div>
      </div>


    </div>
  );
};

export default HomePage;
