import React from "react";
import DescriptionInss from "../product-description/description-inss";
import DescriptionGarantiaImovel from "../product-description/description-garantia-imovel"
import DescriptionGarantiaVeiculo from "../product-description/description-garantia-veiculo"

export const PRODUTOS = [
    {
        id: 1,
        image: 'principal.jpg',
    },
    {
        id: 2,
        image: 'inss-1200x1200.png',
        isRow: true, 
        description: <DescriptionInss />
    },
    {
        id: 3,
        image: 'credito-garantia-imovel.png', 
    },
    {
        id: 4,
        image: 'credito-garantia-veiculo.jpeg', 
    },
    {image: 'fgts.jpeg'}, 
];