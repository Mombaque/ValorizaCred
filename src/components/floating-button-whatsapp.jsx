import React from 'react';
import { AiOutlineWhatsApp } from "react-icons/ai";
import {WHATSAPP_URL} from '../App';
import '../css/floating-button-whatsapp.css'

function onClickWhatsApp() {
    window.open(WHATSAPP_URL, "_blank");
}

function FloatingButtonWhatsApp(props) {
    const css = props.isDesktop ? "float" : "float float-mobile";
    
    return (
        <a href="#" class={css} onClick={onClickWhatsApp}>
            <h1 className="icone"><AiOutlineWhatsApp /></h1>
        </a>
    );
}

export default FloatingButtonWhatsApp;