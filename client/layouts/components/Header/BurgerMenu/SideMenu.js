import React from "react";
// import { NavLink } from "react-router-dom";
import Link from "next/link";

// import style from "./sideMenu.module.css";

const SideMenu = props => {
  return (
    <nav
    // className={
    //   !props.show ? style.sidemenu : [style.sidemenu, style.open].join(" ")
    // }
    >
      <ul>
        <li className="li_left">
          <Link href="/" style={{ cursor: "pointer" }}>
            <a>Accueil</a>
          </Link>
        </li>
        <li className="li_left">
          <Link href="/bieres">
            <a>Nos bières</a>
          </Link>
        </li>
        <li className="li_left">
          <Link href="/apropos">
            <a>À propos</a>
          </Link>
        </li>
        <li className="li_left">
          <Link href="/vente">
            <a>Points de vente</a>
          </Link>
        </li>
        <li className="li_left">
          <Link href="/login">
            <a>Connexion</a>
          </Link>
        </li>
        <li className="li_left">
          <Link href="/panier">
            <a>Panier</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideMenu;
