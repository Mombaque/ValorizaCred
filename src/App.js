import React from "react";
import Main from "./components/main";
import ReactGA from 'react-ga';
import DescriptionGarantiaVeiculo from '../src/components/product-description/description-garantia-veiculo';
import DescriptionGarantiaImovel from "./components/product-description/description-garantia-imovel";
import DescriptionInss from "./components/product-description/description-inss";
import "./App.css";
import "./css/card.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export const WHATSAPP_URL = "https://wa.me/5515996907254";

export const PRODUTOS = [
    {
        image: 'inss-1200x1200.png', 
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
    {image: 'fgts.png'}, 
];

const App = () => {
    // const TRACKING_ID = "UA-203501474-1";
    // ReactGA.initialize(TRACKING_ID);

    return <Main />;
};

export default App; 
