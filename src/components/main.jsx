import React, { useState } from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import Produtos from "./produtos";
import QuemSomos from "./quem-somos"

function onClickWhatsApp() {
  window.open("https://wa.me/5515996907254", "_blank");
}

function Main(){
  const [page, setPage] = useState(0);
  
  const mudarPagina = (newPage) => { setPage(newPage);}
  const children = page == 0 ? <Produtos/> : <QuemSomos/>;
  
  return (
    <div className="App">
      <NavBar 
        onClickWhatsApp={onClickWhatsApp} 
        paginaAtual={page}
        mudarPagina={mudarPagina}/>

      <div>{children}</div>

      {/* floating action button */}
      {/* <a href="#" class="float">
      <i class="fa fa-plus my-float"></i>
      </a> */}

      <Footer />
    </div>
  );
}

export default Main;