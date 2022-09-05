import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import {MdMenu} from 'react-icons/md';
import '../css/navbar.css'

function NavBar(props) {

  return (
    <Navbar variant="dark" className="navbar">
      <div>
        <Image className="logo" src={`/images/logo.png`} style={{height: "10%"}}/>
      </div>
      <div style={{width: "90%"}}></div>
      <h1>
        <MdMenu 
          onClick={() => props.setMenuLateral(true)}></MdMenu></h1>
    </Navbar>
  );
}

export default NavBar;
