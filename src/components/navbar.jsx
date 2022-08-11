import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import {MdMenu} from 'react-icons/md';


function NavBar(props) {
  const logo = <Image src={`/images/logo.png`}/>

  return (
    <Navbar className="navbar">
      {logo}
      <div style={{width: "90%"}}></div>
      <h1>
        <MdMenu 
          onClick={() => props.setMenuLateral(true)}></MdMenu></h1>
    </Navbar>
  );
}

export default NavBar;
