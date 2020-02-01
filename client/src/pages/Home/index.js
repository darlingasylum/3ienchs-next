import React from 'react';
import Head from 'next/head';
import Slider from './../../components/Slider';

import './../../../less/style.less';

const Home = props => {
  console.log('products', props.products);
  return (
    <>
      <Head>
        <title>Brasserie 3ienchs</title>
      </Head>
      {props.products && (
        <div className='hero w-full h-100-vh'>
          <div className='cover-home h-100-vh'></div>
          <Slider
            id='bieres'
            products={props.products.dogsProducts}
            title='Nos bières'
            buttonsType='buyingMode'
          ></Slider>
          <Slider
            products={props.products.featProducts}
            title='Featuring'
            buttonsType='buyingMode'
          ></Slider>
        </div>
      )}
    </>
  );
};

export default Home;
