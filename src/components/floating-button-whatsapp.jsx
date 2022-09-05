import React from 'react';
import { AiOutlineWhatsApp } from "react-icons/ai";
import {WHATSAPP_URL} from '../App';
import '../css/floating-button-whatsapp.css'

function onClickWhatsApp() {
    window.open(WHATSAPP_URL, "_blank");
}

const FloatingButtonWhatsApp = (props) => (
    <a href="#" class={props.isDesktop ? "float" : "float float-mobile"} onClick={onClickWhatsApp}>
        <h1 className="icone"><AiOutlineWhatsApp /></h1>
    </a>
)

export default FloatingButtonWhatsApp;