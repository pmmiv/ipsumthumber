import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Random extends Component {
  state = {
    currentIpsum: {}
  };

  componentDidMount() {
    this.loadIpsum()
  };

  loadIpsum = () => {
    API.getIpsums()
      .then(res =>
        this.randomize(res.data),
      )
      .catch(err => console.log(err));
  };

  randomize = array => {
    const randomIndex = Math.floor(Math.random() * array.length);
    this.setState({currentIpsum: array[randomIndex]});
    console.log("snarf");
  };

  favorite = id => {
    let query = {};
    let message = "";
    if (this.state.currentIpsum.favorite) {
      query = {favorite: false};
      message = "That ipsum isn't for everyone.";
    } else {
      query = {favorite: true};
      message = "Ah! A splendid ipsum!"
    }
    API.favorite(id, query)
        .then(res =>
          alert(message),
          this.loadIpsum()
        )
        .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
        <Col size="md-1">
        </Col>
          <Col size="md-10">
            <Jumbotron>
              <h1>
                  {this.state.currentIpsum.title}
              </h1>
              <p>
                  Here's a sample: <br></br>
                {this.state.currentIpsum.sample}
              </p>
              <button className="btn btn-danger" onClick={this.loadIpsum}>Next Random Ipsum</button>
              <span> </span>
              <a className="btn btn-primary" target="_blank" href={this.state.currentIpsum.url}>Try me</a>
              <span> </span>
              <button className="btn btn-success" onClick={() => this.favorite(this.state.currentIpsum._id)}>

                {this.state.currentIpsum.favorite
                  ? "Unfavorite"
                  : "favorite"}
              
              </button>
            </Jumbotron>
          </Col>
        <Col size="md-1">
        </Col>
        </Row>
      </Container>
    );
  }
}

export default Random;
