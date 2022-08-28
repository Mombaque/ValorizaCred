import React, { useState } from "react";
import {WHATSAPP_URL} from '../App'
import NavBar from "./navbar";
import Footer from "./footer";
import Produtos from "./produtos";
import QuemSomos from "./quem-somos"
import MenuLateral from "./menu";
import { Helmet } from "react-helmet";
import { useMediaQuery } from 'react-responsive'
import Slides from './slides';
import FloatingButtonWhatsApp from "./floating-button-whatsapp";

function Main(){
  const [page, setPage] = useState(0);
  const [menuLateralAberto, setMenuLateral] = useState(false);

  const tratarMenu = (abrir) => {
    return setMenuLateral(abrir);
  };
  const mudarPagina = (newPage) => setPage(newPage);

  const children = page === 0 ? <Slides/> : <QuemSomos/>;
  // const children = <Slides></Slides>
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })

  const appClass = isDesktopOrLaptop ? "App" : "AppMobile";

  return (
    <div className={appClass}>
      <Helmet>
          <meta charSet="utf-8" />
          <title>ValorizaCred - Financeira</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-203501474-1"></script>
          {/* <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push({'event': 'new_subscriber'})}
            gtag('js', new Date());
            
            gtag('config', 'UA-203501474-1');
          </script> */}
      </Helmet>

      <MenuLateral 
        mudarPagina={mudarPagina}
        menuLateralAberto={menuLateralAberto} 
        setMenuLateral={tratarMenu}/>

      <NavBar 
        onClickWhatsApp={onClickWhatsApp} 
        setMenuLateral={tratarMenu}/>

      <div>{children}</div>
      <FloatingButtonWhatsApp></FloatingButtonWhatsApp>
      <Footer />
      
    </div>
  );
}

function onClickWhatsApp() {
  window.open(WHATSAPP_URL, "_blank");
}

export default Main;