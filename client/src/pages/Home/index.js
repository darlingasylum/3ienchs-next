import React from 'react';
import Head from 'next/head';
import Slider from './../../components/Slider';

import './../../../less/style.less';

const Home = props => {
  return (
    <>
      <Head>
        <title>Brasserie 3ienchs</title>
      </Head>

      <div className='hero w-full h-100-vh'>
        <div className='cover-home h-100-vh'></div>
        <Slider
          products={props.products.dogsProducts}
          title='Nos bières'
        ></Slider>
        <Slider
          products={props.products.featProducts}
          title='Featuring'
        ></Slider>
      </div>
    </>
  );
};

export default Home;
