import React, { Component } from "react";
import Card from "./card";

class CardsRow extends Component {
  state = {};

  render() {
    return (
      <div class="row">
        <Card
          header="CAPITAL DE GIRO"
          title="Para pequenas e médias empresas"
          content="AAAAAAAAAAAAAAAAAAAAA"
        />
        <Card
          header="Empréstimo consignado"
          title="Em até 72x"
          content="Para aposentados e pensionistas do INSS e servidores públicos"
        />
        <Card
          header="Empréstimo com garantia de imóvel"
          content="CCCCCCCCCCCCCCCCCCCCCC"
        />
      </div>
    );
  }
}

export default CardsRow;
