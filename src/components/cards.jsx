import React, { Component } from "react";
import CardProduto from "./card-produto";
import {PRODUTOS} from '../App'

function Cards() {
  return (
    <>
        {PRODUTOS.map(p => (<CardProduto produto={p}/>))}
    </>
    )
}

export default Cards;
