import React, { Component } from "react";

class CardImage extends Component {
  state = {};

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <img src={this.props.imagePath} alt={this.props.alt} />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.content}</p>
          {/* <a href="#" className="btn btn-primary">
            Faça uma simulação
          </a> */}
        </div>
      </div>
    );
  }
}

export default CardImage;
