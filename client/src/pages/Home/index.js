import React from 'react';
import Head from 'next/head';
import './../../../less/style.less';

const Home = props => {
  // console.log(props);
  return (
    <>
      <Head>
        <title>Brasserie 3ienchs</title>
      </Head>

      <div className='hero'>
        <h1 className='nickname block p-2 br-10 cursor-pointer text-dark hover:bg-pink-iench transition-1'>
          Welcome to 3ienchs!
        </h1>

        {props.products.map(beer => (
          <li key={beer.product_id}>{beer.product_name} </li>
        ))}
      </div>
    </>
  );
};

export default Home;
