import React, { Component } from 'react';
import Link from '../../../../src/components/Link';

import Burger from './components/BurgerMenu/Burger.js';
import './../../../../less/style.less';

import tinyLogo from './../../../../assets/logos/3ienchs_white_logo.png';
import basketIcon from './../../../../assets/icons/basket_white.svg';

export default class Header extends Component {
  render() {
    return (
      <>
        <nav className='items-center bg-black text-white f5 flex justify-around pin-t h-10 fixed w-full nickname z-index-4'>
          <div className='display-none block-md'>
            <Burger click={this.props.burgerClickHandler} />
          </div>
          <div>
            <ul className='flex items-center p-0'>
              <li className=' display-none-md mt-3 ml-3'>
                <Link href='/' useActive={false}>
                  <a>
                    <div className='circle-size bg-black'>
                      <span className='inline-block'></span>
                      <img
                        src={tinyLogo}
                        alt='logo_iench'
                        className='w-60-percent block mx-auto pt-2'
                      />
                    </div>
                  </a>
                </Link>
              </li>
              <li className='hover-pink-iench pr-10 pl-10 display-none-md'>
                <Link href='/#bieres'>
                  <a>Les bières</a>
                </Link>
              </li>
              <li className='pr-10 display-none-md'>
                <Link href='/#agenda'>
                  <a>Agenda</a>
                </Link>
              </li>
              <li className='pr-10 display-none-md'>
                <Link href='/#artwork'>
                  <a>Artwork</a>
                </Link>
              </li>
              <li className='pr-10 display-none-md'>
                <Link href='/#music'>
                  <a>Pour les zicos</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='spacer' />
          <div>
            <ul className='flex items-center p-0 h-10'>
              <li className='display-none-md h-10 align-middle lh-navbar'>
                <Link href='/commander' useActive>
                  <a>Commander</a>
                </Link>
              </li>
              <li className='pl-6 pr-6 mr-6 display-none-md h-10'>
                <Link href='/panier' useActive>
                  <a className='h-10'>
                    <img
                      src={basketIcon}
                      className='w-6 relative t-4px cursor-pointer'
                      alt='panier_icon'
                    />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}
