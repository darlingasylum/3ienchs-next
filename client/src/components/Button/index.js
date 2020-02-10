import React from 'react';
import Link from 'next/link';

const Button = ({ children, isExternal = false, to, onClick }) => {
  const buttonContent = (
    <div
      onClick={onClick}
      className='h-18 w-60 nickname flex justify-center align-center my-8 cursor-pointer bg-button mx-auto'
    >
      <div className='f4 pb-2'>{children}</div>
    </div>
  );

  if (!to) {
    return buttonContent;
  } else if (isExternal) {
    return (
      <a href={to} target='_blank'>
        {buttonContent}
      </a>
    );
  }

  return (
    <Link href={to}>
      <a className='px-5'>{buttonContent}</a>
    </Link>
  );
};

export default Button;
