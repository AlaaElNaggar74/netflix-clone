

import React from 'react';
import CategoryCopon from '../CategoryComponent/CategoryCopon';
import   "./HomePage.css"

import request from '../../ApiData/ApiLinks';

import LandingPage from './LandingPage/LandingPage';
const HomePage = () => {
  
  return (
    <div>
      <LandingPage /> 
      <CategoryCopon cateTitle="Popular" fetchUrl={request.requestPopular}/>
      <CategoryCopon cateTitle="Top Rated" fetchUrl={request.requestTopRated}/>
      <CategoryCopon cateTitle="Trending" fetchUrl={request.requestTrending}/>
      <CategoryCopon cateTitle="Up coming" fetchUrl={request.requestUpcoming}/>
      
    </div>
  );
}

export default HomePage;
