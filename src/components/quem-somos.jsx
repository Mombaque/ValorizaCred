import React from "react";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { TbMapSearch } from "react-icons/tb";

function abrirMapa(){
    const url = `https://www.google.com/maps/place/ValorizaCred+-+Empr%C3%A9stimos+consignados,+financiamentos./@-23.6438391,-47.5777964,17z/data=!3m1!4b1!4m5!3m4!1s0x94c58fae0add3f3d:0x836da958ac6efbd6!8m2!3d-23.6438391!4d-47.5756077`;
    window.open(url, "_blank");
}

const quemSomos= () => {
    return (
        <div className="quem-somos-container">
            <h1>
                <Badge pill bg="dark" className="my-badge">
                    Quem somos
                </Badge>
            </h1>
            <div className="quem-somos-texto">
                Correspondente bancário com foco em empréstimos consignados atuando desde 2005 no mesmo endereço, 
                na cidade de Salto de Pirapora, SP. Atualmente atendemos com crédito pessoal, antecipação de saque aniversário FGTS, 
                financiamento de  veículos, financiamento de imóveis e crédito com garantia de imóvel  ou veículo através das  mais conceituadas 
                instituições financeiras.
                <br/>
                <br/>
                <Button variant="dark" onClick={abrirMapa}>
                    Abrir no Maps <TbMapSearch/>
                </Button>
            </div>
        </div>
    );  
}

export default quemSomos