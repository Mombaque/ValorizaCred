import React from "react";
import CustomButton from "../custom-button";
import "../../css/product-description/inss.css";

function DescriptionInss(props)
{
    return (
        <div style={{
            display: "flex", 
            flexDirection: "column",
            marginLeft: "5%"
        }}
        >
            <h8>✅Crédito pessoal, com garantia de <b>veículo</b>🚗 ou <b>imóvel</b>🏠</h8>
            <h8>✅Portabilidade com <b>redução de juros</b></h8>
            <h8>✅Tenha atendimento personalizado em todo o processo, tudo em um único lugar.</h8>
            <h8>✅Correspondente bancário certificado pela Febraban</h8>

            <h7>
                Nosso diferencial está no fornecimento de opções de crédito que proporcionam valores liberados mais vantajosos e taxas significativamente inferiores quando comparadas ao crédito pessoal convencional. Nossa atuação abrange uma ampla gama de instituições financeiras, respaldada por uma sólida presença no mercado.
            </h7>
            <h7>
                Nossa atuação abrange uma ampla gama de instituições financeiras, 
                respaldada por uma sólida presença no mercado.
            </h7>

            {/* <CustomButton url={props.url} /> */}
        </div>
    )
}

export default DescriptionInss;