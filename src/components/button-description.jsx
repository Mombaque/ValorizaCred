import React from "react";
import { Button } from 'react-bootstrap';
import "../../css/product-description.css";

function CustomButton()
{
    return (
        <>
            <Button onClick={() => navigate(props.url)}>
                {props.text ? props.text : 'Clique aqui para saber mais'}
            </Button>
        </>
    )
}

function navigate(url){
    window.open(url, "_blank");    
} 

export default CustomButton;