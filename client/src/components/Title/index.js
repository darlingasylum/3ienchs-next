import React from 'react';

const Title = ({ title }) => {
  return (
    <div className='bg-title mx-auto h-30 mt-20 mb-10 pt-2 width-title w-60'>
      <h2 className='nickname text-align-center text-white'> {title}</h2>
    </div>
  );
};
export default Title;
