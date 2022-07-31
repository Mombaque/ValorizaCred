import React, { Component } from "react";
import CardImage from "./card-image";

class CardImageRow extends Component {
  state = {};

  getImage(file) {
    return `/images/${file}`;
  }

  render() {
    const style = { margin: "100px" };
    return (
      <div className="row" style={style}>
        <CardImage
          imagePath={this.getImage("dinheiro.jpg")}
          alt="dinheiro"
          title="Empréstimo consignado"
          content="Para aposentados e pensionistas do INSS e servidores públicos (estaduais, municipais e federais), com atendimento personalizado e condições especiais. Portabilidade com juros reduzidos - já pagou 12 parcelas ou mais? Faça uma simulação sem compromisso e veremos a possibilidade."
        />
        <CardImage
          imagePath={this.getImage("dinheiro.jpg")}
          // imagePath={this.getImage("empresarios.jpg")}
          alt="empresarios"
          title="Capital de giro para pequenas e médias empresas"
          content="Com créditos de R$50.000 até R$500.000 para empresas com no mínimo 5 anos de fundação e com faturamento anual a partir de R$500.000"
        />

        <CardImage
          imagePath={this.getImage("dinheiro.jpg")}
          // imagePath={this.getImage("casa.jpg")}
          alt="casa"
          title="Empréstimo com garantia de imóvel"
          content="Quer investir, quitar dívidas, reorganizar a vida financeira? Podemos te ajudar. Seu imóvel quitado vale crédito. Com uma das melhores taxas de juros do mercado e até 15 anos para pagar."
        />
        <CardImage
          imagePath={this.getImage("dinheiro.jpg")}
          // imagePath={this.getImage("carro.jpg")}
          alt="veículo"
          title="Crédito com garantia de veículo"
          content="Mais uma solução? Crédito com garantia de veículos ou refinanciamento de veículos - resolva seu problema de dinheiro e continue com seu veículo."
        />
      </div>
    );
  }
}

export default CardImageRow;
