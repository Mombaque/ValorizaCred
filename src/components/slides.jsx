import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { WHATSAPP_URL, PRODUTOS } from '../App';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/slide.css'

function Slides(){
    return (
        <Carousel variant="dark" className="slide">
            {PRODUTOS.map((x) => (
                <Carousel.Item>
                    <div className="container">
                        <img onClick={() => navigate(x.url)} 
                            src={`/images/${x.image}`} 
                            alt={x.image}/>
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