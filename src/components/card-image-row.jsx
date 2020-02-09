import React, { Component } from "react";
import CardImage from "./card-image";

class CardImageRow extends Component {
  state = {};
  render() {
    return (
      <div class="row">
        <CardImage
          imagePath="/images/dinheiro.jpg"
          alt=""
          title="Empréstimo consignado em até 72x"
          content="Para aposentados e pensionistas do INSS e servidores públicos"
        />
        <CardImage
          imagePath="/images/casa.jpg"
          alt=""
          title="Empréstimo com garantia de imóvel"
          content="AAAAAAAAAAAAAAAAAAAAA"
        />
        <CardImage
          imagePath="/images/empresarios.jpg"
          alt=""
          title="Capital de giro para pequenas e médias empresas"
          content="AAAAAAAAAAAAAAAAAAAAA"
        />
      </div>
    );
  }
}

export default CardImageRow;
