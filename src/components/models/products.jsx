import React from "react";
import DescriptionInss from "../product-description/description-inss";
import DescriptionGarantiaImovel from "../product-description/description-garantia-imovel"
import DescriptionGarantiaVeiculo from "../product-description/description-garantia-veiculo"

export const PRODUTOS = [
    {
        image: 'inss-1200x1200.png',
        isRow: true, 
        description: <DescriptionInss />
    },
    {
        image: 'credito-garantia-imovel.png', 
        description: <DescriptionGarantiaImovel url="https://loja.franq.com.br/pb/heleide-borges/emprestimos/55"/>
    },
    {
        image: 'credito-garantia-veiculo.jpeg', 
        description: <DescriptionGarantiaVeiculo url="https://loja.franq.com.br/pb/heleide-borges/emprestimos/120"/>
    },
    // {image: 'emprestimo.jpeg'},
    {image: 'fgts.jpeg'}, 
];