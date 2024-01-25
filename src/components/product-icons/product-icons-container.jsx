import React from "react";
import { PRODUCT_ICONS } from "../models/product-icons-model";
import '../../css/product-icon/product-icons-container.css'

function ProductIconsContainer(){
    return (
        <div class="container">
           {PRODUCT_ICONS.map(p => (<>{p.icon}</>))} 
        </div>
    )
}

export default ProductIconsContainer