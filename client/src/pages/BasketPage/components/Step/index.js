import React from 'react';

const Step = ({ number }) => {
  return (
    <div className='bg-black text-white nickname br-100 h-10 w-10 flex align-center justify-center inline-flex mr-4 mb-2'>
      {number}
    </div>
  );
};

export default Step;
