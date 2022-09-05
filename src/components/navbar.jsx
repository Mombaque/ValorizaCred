import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import {MdMenu} from 'react-icons/md';
import '../css/navbar.css'

function NavBar(props) {
  const navbarCss = props.isDesktop ? "navbar-desktop" : "navbar-mobile";
  const menuCss = props.isDesktop ? "menu-desktop" : "menu-mobile";

  return (
    <Navbar variant="dark" className={navbarCss}>
      <div>
        <Image className="logo" src={`/images/logo.png`} />
      </div>
      <div style={{width: "80%"}}></div>
      <h1>
        <MdMenu 
          className={menuCss}
          onClick={() => props.setMenuLateral(true)}></MdMenu></h1>
    </Navbar>
  );
}

export default NavBar;
