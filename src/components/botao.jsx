import React, { Component } from "react";

class Botao extends Component{
    
    render(){
        const buttonStyle = { fontSize: "30px" };
        return(
            <button
                className="btn btn-primary btn-sn m-5"
                style={buttonStyle}
                onClick={this.props.click}
            >
                {this.props.texto}
            </button>           
        );
    }
}

export default Botao;