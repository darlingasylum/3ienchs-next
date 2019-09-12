import React, { Component } from 'react';
// import { Link, NavLink } from "react-router-dom"
import Link from 'next/link';

// import { connect } from "react-redux";

import Burger from './BurgerMenu/Burger.js';
import './../../../less/style.less';

import tinyLogo from './../../../assets/logos/3ienchs_white_logo.png';
// import connexion_icon from "./../../../assets/icons/user_white.svg";
// import basket from "./../../../assets/icons/basket_white.svg";
// import style from "./navbar.module.css";

// const mapStateToProps = state => {
//   return {
//     connectedUser: state.connectedUser,
//     userPrenom: state.userPrenom,
//     articlesPanier: state.articlesPanier
//   };
// };

export default class Header extends Component {
  render() {
    // const userPrenom = this.props.userPrenom;
    // const connectedUser = this.props.connectedUser;

    // const userPrenom = JSON.parse(localStorage.getItem("user"));
    // let userPrenom;
    // const user = JSON.parse(localStorage.getItem("user") || "null");
    // if (user) {
    //   userPrenom = user.user_prenom;
    // }

    // const connectedUser = JSON.parse(
    //   localStorage.getItem("connectedUser") || this.props.connectedUser
    // );

    // console.log("user connecté ?", connectedUser);
    // console.log("son prénom ==>", userPrenom);

    // console.log(this.props.articlesPanier);
    // Calcule le nombre total de bières dans le panier
    // let totalQty = 0;
    // this.props.articlesPanier.forEach(element => {
    //   totalQty += element.quantity;
    // });

    // @media (min-width: 850px) {
    //   .bugerIconContainer {
    //     display: none;
    //   }
    // }

    // li {
    //   font-family: "roadgeek_2005_engschriftRg";
    //   font-size: 25px;
    //   list-style: none;
    //   transition-duration: 0.6s;
    //   .isActive {
    //     border-bottom: 1px solid white;

    //     &:hover {
    //       border-bottom: 1px solid #ff0066;
    //     }
    //   }
    //   a {
    //     text-decoration: none;
    //     color: white;

    //     &:hover {
    //       color: #ff0066;
    //     }
    //   }
    // }

    return (
      <nav className='items-center bg-black text-white flex justify-around pin-t h-14 fixed z-index-3 w-full '>
        <div className='display-none block-xs'>
          <Burger click={this.props.burgerClickHandler} />
        </div>
        <div>
          <ul className='flex items-center p-0'>
            <li className='pr-10'>
              <Link to='/'>
                <a>
                  <img
                    src={tinyLogo}
                    alt='logo_iench'
                    className='ml-4 max-width-50 max-height-0'
                  />
                </a>
              </Link>
            </li>
            <li className='hover-pink-iench pr-10'>
              <Link href='/'>Accueil</Link>
            </li>
            <li className='pr-10'>
              <Link href='/products'>Nos bières</Link>
            </li>
            <li className='pr-10'>
              <Link href='/about'>À propos</Link>
            </li>
            {/* <li>
              <Link exact="true" activeClassName="isActive" to="/vente">
                Points de vente
              </Link>
            </li> */}
          </ul>
        </div>
        <div className='spacer' />
        <div>
          <ul>
            {/* <li>
              <Link to="/login">
                <img
                  src={connexion_icon}
                  className={style.userIcon}
                  alt="connexion_icon"
                />
              </Link>
            </li> */}
            <li className='pr-10'>
              <Link href='/login'>Connexion</Link>
            </li>
            {/* {connectedUser ? (
              <li className={style.li_right}>
                <NavLink exact activeClassName="isActive" to="/login">
                  {" "}
                  {userPrenom}{" "}
                </NavLink>
              </li>
            ) : (
              <li className={style.li_right}>
                <NavLink exact activeClassName="isActive" to="/login">
                  Connexion
                </NavLink>
              </li>
            )} */}
            {/* <li className={style.li_right}>
              <Link exact="true" activeClassName="isActive" to="/panier">
                <img
                  src={basket}
                  className={style.basketIcon}
                  alt="panier_icon"
                />{" "}
              </Link>
            </li> */}
          </ul>
        </div>
        {/* {this.props.articlesPanier.length > 0 && (
          <Link to="/panier">
            <div className="articlesQty">{totalQty}</div> 
          </Link>
        )} */}
      </nav>
    );
  }
}

// export default connect(mapStateToProps)(HeaderClass);
