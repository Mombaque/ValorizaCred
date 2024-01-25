import React from "react";
import '../../css/product-icon/product-icon.css'

function BaseProductIcon(props) {
    const iconClass = `floating-product-icon ${props.color}`;

    return(

        <div class="icon-container">
            <h6 className={iconClass}>
                <br/>
                <h1 class="icon">{props.icon}</h1>
            </h6>
            <h5 class="text">{props.text}</h5>
        </div>
    )
}

export default BaseProductIcon;