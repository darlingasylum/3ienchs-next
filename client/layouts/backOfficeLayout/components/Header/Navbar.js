import React, { Component } from 'react';
import Link from '../../../../src/components/Link';

import Burger from './components/BurgerMenu/Burger.js';
import './../../../../less/style.less';

export default class Header extends Component {
  render() {
    return (
      <>
        <nav className='items-center bg-black text-white f5 flex justify-start pin-t h-10 fixed w-full nickname z-index-1'>
          <div className='display-none block-xs'>
            <Burger click={this.props.burgerClickHandler} />
          </div>
          <div>
            <ul className='flex items-center p-0 h-10'>
              <li className='pr-10 pl-10 display-none-xs h-10 align-middle lh-navbar'>
                <Link href='/admindashboard' useActive>
                  <a>Accueil</a>
                </Link>
              </li>
              <li className='pr-10 display-none-xs h-10 align-middle lh-navbar'>
                <Link href='/admindashboard/products' useActive>
                  <a>Bières</a>
                </Link>
              </li>
              <li className='pr-10 display-none-xs h-10 align-middle lh-navbar'>
                <Link href='/admindashboard/orders' useActive>
                  <a>Commandes</a>
                </Link>
              </li>
              <li className='pr-10 display-none-xs h-10 align-middle lh-navbar'>
                <Link href='/admindashboard/agenda' useActive>
                  <a>Agenda</a>
                </Link>
              </li>
              <li className='pr-10 display-none-xs h-10 align-middle lh-navbar'>
                <Link href='/admindashboard/artwork' useActive>
                  <a>Artwork</a>
                </Link>
              </li>
              <li className='pr-10 display-none-xs h-10 align-middle lh-navbar'>
                <Link href='/admindashboard/zicos' useActive>
                  <a>Zicos</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}
