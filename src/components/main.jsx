import React, { useState } from "react";
import NavBar from "./navbar";
import CardsImageRow from "./card-image-row";
import MainImage from "./main-image";
import Footer from "./footer";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function onClickWhatsApp() {
  window.open("https://wa.me/5515996907254", "_blank");
}

function abrirMapa(){
  const url = `https://www.google.com/maps/place/ValorizaCred+-+Empr%C3%A9stimos+consignados,+financiamentos./@-23.6438391,-47.5777964,17z/data=!3m1!4b1!4m5!3m4!1s0x94c58fae0add3f3d:0x836da958ac6efbd6!8m2!3d-23.6438391!4d-47.5756077`;
  window.open(url, "_blank");
}

function quemSomos(){
  return (
    <div className="column">

      <h1>
        <Badge pill variant="primary" className="badge">
          Quem somos
        </Badge>
      </h1>
      <div className="quem-somos-texto">
        Correspondente bancário com foco em empréstimos consignados atuando desde 2005 no mesmo endereço, 
        na cidade de Salto de Pirapora, SP. Atualmente atendemos com crédito pessoal, antecipação de saque aniversário FGTS, 
        financiamento de  veículos, financiamento de imóveis e crédito com garantia de imóvel  ou veículo através das  mais conceituadas 
        instituições financeiras.
        <br/>
        <br/>
        <br/>
        <Button variant="primary" onClick={abrirMapa}>Abrir no maps</Button>
      </div>

    </div>
  );  
}

function produtos(){
  return(
    <div>
      <h1>
        <Badge pill variant="primary" className="badge">
          Conheça nossos produtos
        </Badge>
      </h1>
      <CardsImageRow/>
      <MainImage />
    </div>
  )
}

function Main(){
  const [page, setPage] = useState(0);
  
  const mudarPagina = (newPage) => { setPage(newPage);}
  const children = page == 0 ? produtos() : quemSomos();
  
  return (
    <div className="App">
      <NavBar 
        onClickWhatsApp={onClickWhatsApp} 
        mudarPagina={mudarPagina}/>

      <div>{children}</div>

      {/* <a href="#" class="float">
      <i class="fa fa-plus my-float"></i>
      </a> */}

      <Footer />
    </div>
  );
}

export default Main;