import React, { Component } from "react";

class CardImage extends Component {
  state = {};

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="card">
        <img src={this.props.imagePath} alt={this.props.alt} />
        <div class="card-body">
          <h5 class="card-title">{this.props.title}</h5>
          <p class="card-text">{this.props.content}</p>
          <a href="#" class="btn btn-primary">
            Faça uma simulação
          </a>
        </div>
      </div>
    );
  }
}

export default CardImage;
