import React from 'react';

const Title = ({ title }) => {
  return (
    <div className='bg-title mx-auto width-title '>
      <h2 className='nickname text-align-center text-white'> {title}</h2>
    </div>
  );
};
export default Title;
