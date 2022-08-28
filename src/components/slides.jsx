import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { WHATSAPP_URL } from '../App';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/slide.css'

function Slides(){
    const itens = [
        {image: 'emprestimo.jpeg'},
        {image: 'credito-garantia-imovel.jpeg', url: "https://loja.franq.com.br/pb/heleide-borges/emprestimos/55"},
        {image: 'credito-imobiliario.jpeg', url: "https://loja.franq.com.br/pb/heleide-borges/financiamentos/97"},
        {image: 'fgts.png'},
        {image: 'credito-garantia-veiculo.jpeg'},
    ];

    return (
        <Carousel variant="dark">
            {itens.map((x) => (
                <Carousel.Item>
                    <div className='container'>
                        <img className="slide" src={`/images/${x.image}`} alt={x.image}/>
                        <Button onClick={() => navigate(x.url)}>
                            <h2>Saiba mais</h2>
                        </Button>
                    </div>
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