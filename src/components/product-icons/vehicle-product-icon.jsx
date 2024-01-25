import React from "react";
import BaseProductIcon from "./base-product-icon";
import { AiFillCar } from "react-icons/ai";

function VehicleProductIcon(){
    return (
        <>
            <BaseProductIcon 
                text="Garantia de veículo"
                color="vehicle-icon-color"
                icon={<AiFillCar/>}/>
        </>
    )
}

export default VehicleProductIcon