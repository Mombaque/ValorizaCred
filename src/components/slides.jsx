import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { WHATSAPP_URL } from '../App';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/slide.css'
import {PRODUTOS} from './models/products';

function Slides(){
    return (
        <Carousel variant="dark" className="slide">
            {PRODUTOS.map((product) => (
                getSlideItem(product)))}
        </Carousel>
    )
}

function getSlideItem(product) {
    const classe = `slide-container slide-item-${(product.isRow ? 'row' : 'column')}`;

    return <Carousel.Item>
        <div className={classe}>
            <img className='card-image' onClick={() => navigate(product.url)}
                src={`/images/${product.image}`}
                alt={product.image} />
            {description(product)}
        </div>
    </Carousel.Item>;
}

function description(produto) {
    return produto.description
        ? produto.description
        : <Button onClick={() => navigate(produto.url)}><h2>Clique aqui para saber mais!</h2></Button>;
}

function navigate(url){
    url = !url || url === '' 
        ? WHATSAPP_URL 
        : url;
        
    window.open(url, "_blank");    
} 

export default Slides;