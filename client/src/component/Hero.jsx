import React, { Fragment } from 'react';
import { Button } from 'reactstrap';
import UrlForm from './UrlForm';

const Hero = () => {
  return (
    <Fragment>
      <div className='contain'>
        <div className='hero'>
          <div className='hero-text'>
            <h1>Link that mean business</h1>
            <p>Create and share trusted, powerful short links</p>
            <Button color='primary'>Sign up for free</Button>
          </div>
          <div className='hero-img flex-middle'>
            <img src='./img/hero.png' className='img' alt='hero-img' />
          </div>
        </div>

        <UrlForm />
      </div>
    </Fragment>
  );
};

export default Hero;
