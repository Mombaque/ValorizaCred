import React, { useState } from "react";
import {WHATSAPP_URL} from '../App'
import NavBar from "./navbar";
import Footer from "./footer";
import QuemSomos from "./quem-somos"
import MenuLateral from "./menu";
import { Helmet } from "react-helmet";
import { useMediaQuery } from 'react-responsive'
import Slides from './slides';
import FloatingButtonWhatsApp from "./floating-button-whatsapp";
import Cards from './card/cards'
import BaseProductIcon from "./product-icons/base-product-icon";
import ProductIconsContainer from "./product-icons/product-icons-container";
import Playground from "./playground";
function Main(){
  const [page, setPage] = useState(0);
  const [menuLateralAberto, setMenuLateral] = useState(false);

  const tratarMenu = (abrir) => {
    return setMenuLateral(abrir);
  };
  const mudarPagina = (newPage) => setPage(newPage);

  const isDesktop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  
  const appClass = isDesktop ? "App" : "AppMobile";
  const googleAnalyticsId = 'UA-203501474-1';

  return (
    <div className={appClass}>
      <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="keywords"
            content="financiamento, aposentado, pensionista, veículo, financiadoras, crédito, financeiras, funcionário, público, online, imóvel, pessoal, garantia"
          />
          <title>ValorizaCred - Financeira</title>
          <link rel="canonical" href="" />
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', "${googleAnalyticsId}");
            `}
          </script>
      </Helmet>

      <MenuLateral 
        mudarPagina={mudarPagina}
        menuLateralAberto={menuLateralAberto} 
        setMenuLateral={tratarMenu}/>

      <NavBar 
        isDesktop={isDesktop}
        onClickWhatsApp={onClickWhatsApp} 
        setMenuLateral={tratarMenu}/>

      {buscarPagina(isDesktop)}
      <FloatingButtonWhatsApp isDesktop={isDesktop}/>
      
      {isDesktop ? <Footer /> : <></>}
      
    </div>
  );
}

function buscarPagina(isDesktop) {
  const queryParameters = new URLSearchParams(window.location.search)
  const id = queryParameters.get("id");

  return isDesktop ? <Slides productId={id}/> : <Cards productId={id}/>;
}

function onClickWhatsApp() {
  window.open(WHATSAPP_URL, "_blank");
}

export default Main;