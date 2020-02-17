import React, { Component } from "react";
import "../App.css";
import "../css/card.css";
import NavBar from "./navbar";
import CardsImageRow from "./card-image-row";
import MainImage from "./main-image";
import Footer from "./footer";

class Main extends Component {
  onClickWhatsApp = () => {
    window.open("https://wa.me/5515997413771", "_blank");
  };

  render() {
    const buttonStyle = { fontSize: "30px" };
    const infoSpanStyle = { fontSize: "30px", margin: "4px" };
    return (
      <div className="App">
        <NavBar onClickWhatsApp={this.onClickWhatsApp} />
        <MainImage />

        <span style={infoSpanStyle} class="badge badge-pill badge-dark">
          Conheça nossos produtos
        </span>

        <CardsImageRow />

        <button
          className="btn btn-primary btn-sn m-5"
          style={buttonStyle}
          onClick={this.onClickWhatsApp}
        >
          Ir para nosso WhatsApp
        </button>
        <Footer />
      </div>
    );
  }
}

export default Main;
