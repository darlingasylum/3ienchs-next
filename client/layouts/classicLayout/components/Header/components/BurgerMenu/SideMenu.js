import React from 'react';
import Link from 'next/link';

const SideMenu = (props) => {
  return (
    <nav
      className={
        !props.show
          ? 'h-full fixed pin-t pin-l max-width-400 translate-X-100 transition-side-menu w-half z-index-3 '
          : 'h-full fixed pin-t pin-l max-width-400 translate-X-100 transition-side-menu w-half z-index-3 transform-0 bg-black'
      }
    >
      <ul className='text-white'>
        <li className='li_left m-4'>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li className='li_left m-4'>
          <Link href='/#bieres'>
            <a>Les bières</a>
          </Link>
        </li>
        <li className='li_left m-4'>
          <Link href='/#agenda'>
            <a>Agenda</a>
          </Link>
        </li>
        <li className='li_left m-4'>
          <Link href='/#artwork'>
            <a>Artwork</a>
          </Link>
        </li>
        <li className='li_left m-4'>
          <Link href='/#music'>
            <a>Pour les zicos</a>
          </Link>
        </li>
        <li className='li_left m-4'>
          <Link href='/panier'>
            <a>Commander</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideMenu;
