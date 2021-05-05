import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Jeffery from '../images/jeffery-logo.png';

const Navigation = () => (
  <div className='nav'>
    <div className='nav-background'>
      <div className='nav-links'>
        <img src={Jeffery} width='150px' alt='logo'></img>

        <Link to='/' className='home-link'>
          Home
        </Link>
        <Link to='/partner' className='partner'>
          Partner With Us
        </Link>
        <Link to='/login' className='partner'>
          Log In/Sign Up
        </Link>
      </div>
      <div className='Intro'>
        <h1>All inclusive living is living made better.</h1>
        <p>All-inclusive, automated amenities to power temporary living.</p>
      </div>
    </div>
  </div>
);

export default Navigation;
