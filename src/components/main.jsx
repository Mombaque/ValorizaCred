import React, { useState } from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import Produtos from "./produtos";
import QuemSomos from "./quem-somos"

function Main(){
  const [page, setPage] = useState(0);
  
  const mudarPagina = (newPage) => setPage(newPage);
  const children = page === 0 ? <Produtos/> : <QuemSomos/>;
  
  return (
    <div className="App">
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