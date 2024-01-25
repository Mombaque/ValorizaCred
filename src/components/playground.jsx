import React from "react";
import '../css/playground.css'
import ProductIconsContainer from "./product-icons/product-icons-container";

function Playground() {
    return(<div class="container1">
        <div class="container2">
            {/* <img src="img_snow_wide.jpg" alt="Snow" style="width:100%;"> */}
            <img src="/images/inss-1200x1200.png" />
            <div class="bottom-left">
                <h4>✅Obtenha sua simulação de Crédito Imobiliário com as principais instituições financeiras.</h4>
                <h4>✅Receba a orientação de profissionais qualificados.</h4>
                <h4>✅Tenha atendimento personalizado em todo o processo, tudo em um único lugar.</h4>
            </div>
            {/* <div class="top-left">Top Left</div>
            <div class="top-right">Top Right</div>
            <div class="bottom-right">Bottom Right</div>
            <div class="centered">Centered</div> */}
        </div>
        <div class="right">
            <div class="icons">
                <ProductIconsContainer/>
            </div>
            <div class="text-container">
                <h4>✅ Mussum Ipsum, cacilds vidis litro abertis.  Diuretics paradis num copo é motivis de denguis. Delegadis gente finis, bibendum egestas augue arcu ut est. Quem num gosta di mé, boa gentis num é. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.</h4>
                <h4>✅ nec nulla ligula. Donec gravida turpis a vulputate ultricies. Per aumento de cachacis, eu reclamis. Cevadis im ampola pa arma uma pindureta. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.</h4>
                <h4>✅ Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Negão é teu passadis, eu sou faxa pretis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Casamentiss faiz malandris se pirulitá.</h4>
            </div>
        </div>
    </div>)
}

export default Playground