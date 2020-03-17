import React from 'react';
import { Container } from 'reactstrap';

const Section1 = () => {
  return (
    <Container>
      <h1 className='text-capitalize text-center m-3'>Our partners</h1>
      <div className='brand'>
        <img src='./img/logo4.jpeg' className='img-fluid' alt='brand 1' />
        <img src='./img/logo3.jpeg' className='img-fluid' alt='brand 2' />
        <img src='./img/logo2.jpeg' className='img-fluid' alt='brand 3' />
        <img src='./img/logo1.jpeg' className='img-fluid' alt='brand 4' />
        <img src='./img/logo.png' className='img-fluid' alt='brand 5' />
      </div>
    </Container>
  );
};

export default Section1;
