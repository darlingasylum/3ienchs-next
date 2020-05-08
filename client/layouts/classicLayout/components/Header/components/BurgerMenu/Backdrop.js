import React from 'react';

const Backdrop = (props) => (
  <div
    onClick={props.click}
    className='bg-backdrop h-full w-full pin-l pin-t fixed '
  ></div>
);

export default Backdrop;
