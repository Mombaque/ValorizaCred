import React from "react";
import CustomButton from "../custom-button";
import "../../css/product-description.css";

function DescriptionCreditoImovel(props)
{
    return (
        <>
            <h6>Escolha com segurança e tranquilidade. 🏡✨</h6>
            <h6>✅Obtenha sua simulação de Crédito Imobiliário com as principais instituições financeiras.</h6>
            <h6>✅Receba a orientação de profissionais qualificados.</h6>
            <h6>✅Tenha atendimento personalizado em todo o processo, tudo em um único lugar.</h6>
            <CustomButton url={props.url} />
        </>
    )
}

export default DescriptionCreditoImovel;