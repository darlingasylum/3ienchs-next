import React from 'react';
import Link from 'next/link';

const Button = ({ children, isExternal = false, to }) => {
  const buttonContent = (
    <div className='h-18 w-60 nickname flex justify-center align-center m-8 cursor-pointer bg-button '>
      <div className='pb-2'>{children}</div>
    </div>
  );

  if (isExternal) {
    return <a href={to}>{buttonContent}</a>;
  }

  return (
    <Link href={to}>
      <a>{buttonContent}</a>
    </Link>
  );
};

export default Button;
