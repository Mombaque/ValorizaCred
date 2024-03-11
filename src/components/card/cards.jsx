import React from "react";
import CardProduto from "./card-produto";
import {PRODUTOS} from '../models/products'

function Cards(props) {
  let products = props.productId ? PRODUTOS.filter(x => x.id == props.productId) : PRODUTOS;

  return (
    <>

        {products.map(p => (<CardProduto produto={p}/>))}
    </>
    )
}

export default Cards;
