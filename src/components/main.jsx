import React, { Component } from "react";
import NavBar from "./navbar";
import CardsImageRow from "./card-image-row";
import MainImage from "./main-image";
import Footer from "./footer";
import GoogleMapReact from 'google-map-react';
import Botao from "./botao";

class Main extends Component {
  onClickWhatsApp = () => {
    window.open("https://wa.me/5515997413771", "_blank");
  };

  abrirMapa(){
    const url = `https://www.google.com/maps/place/ValorizaCred+-+Empr%C3%A9stimos+consignados,+financiamentos./@-23.6438391,-47.5777964,17z/data=!3m1!4b1!4m5!3m4!1s0x94c58fae0add3f3d:0x836da958ac6efbd6!8m2!3d-23.6438391!4d-47.5756077`;
    window.open(url, "_blank");
  }

  main(children){
    return (
      <div className="App">
        <NavBar onClickWhatsApp={this.onClickWhatsApp} />
        <div>{children}</div>
        <Footer />
      </div>
    );
  }

  quemSomos(){
    return (
      <div>
      <p>Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris, leite de mula manquis sem cabeça.Viva Forevis aptent taciti sociosqu ad litora torquent.Cevadis im ampola pa arma uma pindureta.Interagi no mé, cursus quis, vehicula ac nisi.</p>

      <Botao click={this.abrirMapa} texto="Abrir no mapa"/>
      </div>
    );  
  }

  produtos(){
    const buttonStyle = { fontSize: "30px" };
    const infoSpanStyle = { fontSize: "30px", margin: "4px" };

    return(
      <div>
        <span style={infoSpanStyle} className="badge badge-pill badge-dark">
          Conheça nossas soluções de crédito
        </span>
        <CardsImageRow/>
        <Botao click={this.onClickWhatsApp} texto="Ir para nosso WhatsApp"/>
        <MainImage />
      </div>
    )
  }

  render() {
    return this.main(
      this.quemSomos());
  }
}

export default Main;
