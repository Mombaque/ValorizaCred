import React, { Component } from "react";

class Card extends Component {
  state = {};

  constructor(props) {
    super(props);
  }

  render() {
    const style = { margin: "50px" };
    return (
      <div
        class="card bg-light mb-3"
        style={style}
        //style="max-width: 18rem;"
      >
        <div class="card-header">{this.props.header}</div>
        <div class="card-body">
          <h5 class="card-title">{this.props.title}</h5>
          <p class="card-text">{this.props.content}</p>
        </div>
      </div>
    );
  }
}

export default Card;
