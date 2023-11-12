import React from "react";
import "./App.css";
import "./css/card.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/main";
import ReactGA from 'react-ga';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export const WHATSAPP_URL = "https://wa.me/5515996907254";

export const PRODUTOS = [
    {image: 'emprestimo.jpeg'},
    {image: 'credito-garantia-veiculo.jpeg'},
    {image: 'credito-garantia-imovel.png'},
    {image: 'credito-imobiliario.png', url: "https://loja.franq.com.br/pb/heleide-borges/financiamentos/97"},
    {image: 'fgts.png'}, 
];

const App = () => {
    const TRACKING_ID = "UA-203501474-1";
    ReactGA.initialize(TRACKING_ID);

    return <Main />;
};

export default App; 
