import React from 'react'
import Cards from "./cards";
import Badge from 'react-bootstrap/Badge';

const Produtos = () => {
    return(
    <div>
        <h1>
            <Badge pill bg="dark" className="my-badge">
                Conheça nossos produtos
            </Badge>
        </h1>
        <Cards/>
    </div>
    )
}

export default Produtos;