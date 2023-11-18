import React from "react";
import { Button } from 'react-bootstrap';

function CustomButton(props)
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