import React from 'react';
// import style from "./backdrop.module.css";

// .backdrop {
//     background: rgba(0, 0, 0, 0.3);
//     height: 100%;
//     left: 0;
//     position: fixed;
//     top: 0;
//     width: 100%;
//     z-index: 100;
//   }

const Backdrop = props => (
  <div
    onClick={props.click}
    className='bg-backdrop h-full w-full pin-l pin-t fixed '
  ></div>
);

export default Backdrop;
