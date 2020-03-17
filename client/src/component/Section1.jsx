import React from 'react';
import { Container } from 'reactstrap';

const Section1 = () => {
  return (
    <Container>
      <h1 className='text-capitalize text-center m-3'>
        Change the world with our brand
      </h1>
      <div className='row mt-5 pb-5'>
        <div className='col-sm-6'>
          <img src='./img/aside1.png' className='img-fluid' alt='' />
        </div>
        <div className='col-sm-6 text-right flex-middle'>
          <h3 className='text-capitalize mb-3'>Get connected</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium quo officia distinctio esse repellat officiis expedita,
            laudantium reiciendis! Earum eligendi incidunt possimus blanditiis
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Section1;
