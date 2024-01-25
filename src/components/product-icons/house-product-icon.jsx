import React from "react";
import BaseProductIcon from "./base-product-icon";
import { MdOutlineHouse } from "react-icons/md";

function HouseProductIcon(){
    return (
        <>
            <BaseProductIcon
                text="Garantia de imóvel"
                color="house-icon-color"
                icon={<MdOutlineHouse/>}/>
        </>
    )
}

export default HouseProductIcon