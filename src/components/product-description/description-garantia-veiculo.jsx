import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import "../../css/product-description.css";

function DescriptionGarantiaVeiculo(props)
{
    return (
        <>
            <h6><b>Obtenha um crédito substancial e sob medida para suas necessidades financeiras, sem abrir mão do seu veículo! 🚗</b></h6>
            <h6>✅ Taxas atrativas: Juros baixos para potencializar seus ganhos.</h6>
            <h6>✅ Prazos flexíveis: Adequação das parcelas às suas necessidades.</h6>
            <h6>✅ Mantenha a posse: Utilize seu veículo como garantia, sem a necessidade de abrir mão dele.</h6>
            <h6>Seu veículo, seu crédito, e você no controle!</h6>
            <Button onClick={() => navigate(props.url)}>
                Clique aqui para saber mais 
            </Button>
        </>
    )
}

function navigate(url){
    window.open(url, "_blank");    
} 

export default DescriptionGarantiaVeiculo;