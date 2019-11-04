import React from 'react';
// import { NavLink } from "react-router-dom";
import Link from 'next/link';

// import style from "./sideMenu.module.css";

const SideMenu = props => {
  console.log('show ?', props.show);

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
          <Link href='/' style={{ cursor: 'pointer' }}>
            <a>Home</a>
          </Link>
        </li>
        <li className='li_left m-4'>
          <Link href='/bieres'>
            <a>Les bières</a>
          </Link>
        </li>
        <li className='li_left m-4'>
          <Link href='/apropos'>
            <a>Agenda</a>
          </Link>
        </li>
        <li className='li_left m-4'>
          <Link href='/vente'>
            <a>Artwork</a>
          </Link>
        </li>
        <li className='li_left m-4'>
          <Link href='/vente'>
            <a>Pour les zicos</a>
          </Link>
        </li>
        <li className='li_left m-2'>
          <Link href='/panier'>
            <a>Connexion</a>
          </Link>
        </li>
        <li className='li_left m-2'>
          <Link href='/panier'>
            <a>Commander</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideMenu;
