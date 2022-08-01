import React from 'react'
import CardsImageRow from "./card-image-row";
import Badge from 'react-bootstrap/Badge';
import MainImage from "./main-image";
import Placeholder from 'react-bootstrap/Placeholder'

const Produtos = () => {
    return(
    <div>
        <h1>
            <Badge pill bg="dark" className="my-badge">
                Conheça nossos produtos
            </Badge>
        </h1>
        <CardsImageRow/>
        <MainImage />
    </div>
    )
}

export default Produtos;