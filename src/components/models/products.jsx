import React from "react";
import DescriptionInss from "../product-description/description-inss";
import DescriptionGarantiaImovel from "../product-description/description-garantia-imovel"
import DescriptionGarantiaVeiculo from "../product-description/description-garantia-veiculo"

export const PRODUTOS = [
    {
        id: 1,
        image: 'inss-1200x1200.png',
        isRow: true, 
        description: <DescriptionInss />
    },
    {
        id: 2,
        image: 'credito-garantia-imovel.png', 
        //description: <DescriptionGarantiaImovel url="https://loja.franq.com.br/pb/heleide-borges/emprestimos/55"/>
    },
    {
        id: 3,
        image: 'credito-garantia-veiculo.jpeg', 
        //description: <DescriptionGarantiaVeiculo url="https://loja.franq.com.br/pb/heleide-borges/emprestimos/120"/>
    },
    // {image: 'emprestimo.jpeg'},
    {image: 'fgts.jpeg'}, 
];