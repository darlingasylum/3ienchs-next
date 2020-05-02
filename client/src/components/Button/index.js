import React from 'react';
import Link from 'next/link';

const Button = ({
  children,
  isExternal = false,
  to,
  onClick,
  withMarginBottom,
  smallFont,
}) => {
  const buttonContent = (
    <div onClick={onClick}>
      <button className={`button ${smallFont && 'f4'}`}>{children}</button>
      <div className={`buttonShadow ${withMarginBottom && 'mb-10'}`}></div>
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
