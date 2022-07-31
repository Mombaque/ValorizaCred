import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class Card extends Component {
  state = {};

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card className="text-center">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    );  

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
