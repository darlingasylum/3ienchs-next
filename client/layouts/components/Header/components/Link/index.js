import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default ({ href, children, useActive }) => {
  const router = useRouter();

  let className = children.props.className || '';
  if (router.pathname === href && useActive) {
    return (
      <>
        <Link href={href}>{React.cloneElement(children, { className })}</Link>
        <div className='w-full h-2px bg-white relative b-2px'></div>
      </>
    );
  }
  //   console.log('pathname --> ', router.pathname);
  //   console.log('href --> ', href);
  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
};
