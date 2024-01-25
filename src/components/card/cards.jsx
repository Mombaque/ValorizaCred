import React from "react";
import CardProduto from "./card-produto";
import {PRODUTOS} from '../models/products'

function Cards() {
  return (
    <>
        {PRODUTOS.map(p => (<CardProduto produto={p}/>))}
    </>
    )
}

export default Cards;
