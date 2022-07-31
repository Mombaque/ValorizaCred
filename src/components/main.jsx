import React, { Component, useState } from "react";
import NavBar from "./navbar";
import CardsImageRow from "./card-image-row";
import MainImage from "./main-image";
import Footer from "./footer";
import Botao from "./botao";
import Badge from 'react-bootstrap/Badge';
import Carousel from 'react-bootstrap/Carousel';

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

      <h5>Quem somos</h5>
      <p className="test">
        Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris, leite de mula manquis sem cabeça.Viva Forevis aptent taciti sociosqu ad litora torquent.Cevadis im ampola pa arma uma pindureta.Interagi no mé, cursus quis, vehicula ac nisi.
        Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris, leite de mula manquis sem cabeça.Viva Forevis aptent taciti sociosqu ad litora torquent.Cevadis im ampola pa arma uma pindureta.Interagi no mé, cursus quis, vehicula ac nisi.
        Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris, leite de mula manquis sem cabeça.Viva Forevis aptent taciti sociosqu ad litora torquent.Cevadis im ampola pa arma uma pindureta.Interagi no mé, cursus quis, vehicula ac nisi.
        Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris, leite de mula manquis sem cabeça.Viva Forevis aptent taciti sociosqu ad litora torquent.Cevadis im ampola pa arma uma pindureta.Interagi no mé, cursus quis, vehicula ac nisi.
      </p>
      <Botao click={abrirMapa} texto="Abrir no mapa"/>
    </div>
  );  
}

function produtos(){
  const infoSpanStyle = { fontSize: "30px", margin: "4px" };

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
      
      <Footer />
    </div>
  );
}

export default Main;