import React, { useState } from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import Produtos from "./produtos";
import QuemSomos from "./quem-somos"
import {Helmet} from "react-helmet";
 

function Main(){
  const [page, setPage] = useState(0);
  
  const mudarPagina = (newPage) => setPage(newPage);
  const children = page === 0 ? <Produtos/> : <QuemSomos/>;
  
  return (
    <div className="App">
      <Helmet>
          <meta charSet="utf-8" />
          <title>ValorizaCred - Financeira</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-203501474-1"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push({'event': 'new_subscriber'})}
            gtag('js', new Date());

            gtag('config', 'UA-203501474-1');
          </script>

      </Helmet>
      <NavBar 
        onClickWhatsApp={onClickWhatsApp} 
        paginaAtual={page}
        mudarPagina={mudarPagina}/>

      <div>{children}</div>

      {/* {floactionWhatsAppButton} */}

      <Footer />
    </div>
  );
}

const floactionWhatsAppButton = 
  <a href="#" class="float">
    <i class="fa fa-plus my-float"></i>
  </a>;

function onClickWhatsApp() {
  window.open("https://wa.me/5515996907254", "_blank");
}

export default Main;