import React, { Component } from "react";
import CardProduto from "./card-produto";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { MdDirectionsCar, MdAttachMoney, MdOutlineHouse } from "react-icons/md";

class Cards extends Component {
  state = {};

  getImage(file) {
    return `/images/${file}`;
  }

  render() {
    return (<Container>
      <Row>
        <Col sm>
          <CardProduto
            alt="dinheiro"
            icon={<MdAttachMoney/>}
            header="Empréstimo consignado"
            title="Para aposentados/pensionistas do INSS e servidores públicos"
            text="Com atendimento personalizado e condições especiais. Portabilidade com juros reduzidos - já pagou 12 parcelas ou mais? Faça uma simulação sem compromisso e veremos a possibilidade."
            url=""
          />
        </Col>

        <Col sm>
          <CardProduto
            alt="empresarios"
            icon={<MdOutlineHouse/>}
            header="Financiamento de imóvel"
            title="Vai comprar um imóvel financiado?"
            text="Receba simulação dos 3 principais bancos. Compare, escolha e solicite aqui!"
            url="https://loja.franq.com.br/pb/heleide-borges/financiamentos/97"
          />
        </Col>

        <Col sm>
          <CardProduto
            alt="casa"
            icon={<MdOutlineHouse/>}
            header="Empréstimo com garantia de imóvel"
            title="Quer investir, quitar dívidas, reorganizar a vida financeira?"
            text="Seu imóvel quitado vale crédito. Com uma das melhores taxas de juros do mercado e até 15 anos para pagar."
            url="https://loja.franq.com.br/pb/heleide-borges/emprestimos/55"
          />
        </Col>

        <Col sm>
          <CardProduto
            alt="veículo"
            icon={<MdDirectionsCar/>}
            header="Crédito com garantia de veículo"
            title="Possui um veículo e precisa de dinheiro?"
            text="Resolva seu problema e continue com seu veículo."
            url="https://loja.franq.com.br/pb/heleide-borges/emprestimos/1"
            />
        </Col>
      </Row>
    </Container>)
  }
}

export default Cards;
