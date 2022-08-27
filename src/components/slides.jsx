import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/slide.css'
import { WHATSAPP_URL } from '../App';
import { Button } from 'react-bootstrap';

function Slides(){
    const itens = [
        {image: 'emprestimo.jpeg'},
        {image: 'credito-garantia.jpeg', url: "https://loja.franq.com.br/pb/heleide-borges/emprestimos/55"},
        {image: 'saque.png'},
    ];

    return (

        <Carousel className="slide">

            {itens.map((x) => (<Carousel.Item>
                <img
                    className="d-block w-100"
                    src={`/images/${x.image}`}
                    // src={`/images/main_desktop.png`}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <Button onClick={() => navigate(x.url)}>SAIBA MAIS</Button>
                </Carousel.Caption>
            </Carousel.Item>))}

        </Carousel>
    )
}


function navigate(url){
    url = !url || url === '' 
        ? WHATSAPP_URL 
        : url;
    window.open(url, "_blank");    
}

export default Slides;