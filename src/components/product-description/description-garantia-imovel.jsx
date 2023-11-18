import React, { Component } from "react";
import "../../css/product-description.css";
import CustomButton from "../custom-button";

function DescriptionGarantiaImovel(props)
{
    return (
        <>
            <h6><b>Oportunidades incríveis. Com o Crédito com Garantia de Imóvel, conquiste:</b></h6>
            <h6>✅ Juros mais baixos para maximizar seu investimento.</h6>
            <h6>✅ Prazos flexíveis: ajuste as parcelas de acordo com suas necessidades.</h6>
            <h6>✅ Limite elevado: capitalize seu imóvel e obtenha crédito generoso</h6>
            <CustomButton url={props.url} />
        </>
    )
}

export default DescriptionGarantiaImovel;