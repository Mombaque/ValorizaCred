import React from "react";
import "../../css/product-description/inss.css";

function Description(props)
{
    return (
        <div style={{
            display: "flex", 
            flexDirection: "column",
            marginLeft: "5%"
        }}
        >
            📌 Atendemos Servidores Públicos

            <h8>✅ Servidor do Estado de São Paulo – Temos as melhores condições para sua margem, aumento salarial e muito mais. Conte com agilidade, experiência e segurança para contratar seu crédito.</h8>
            <h8>✅ Servidores Municipais de São Paulo – Condições especiais para quem trabalha na administração pública municipal.</h8>
            <h8>✅ Servidores Municipais de Sorocaba – Liberado também para celetistas.</h8>
            <h8>✅ Servidores Municipais de Itapeva – Empréstimo consignado com vantagens exclusivas.</h8>
            <h8>💰 Condições especiais e atendimento personalizado!</h8>

        </div>
    )
}

export default Description;