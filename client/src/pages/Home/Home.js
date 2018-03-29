import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

class Home extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    console.log("home mounted");
  }

  render() {
    return (
      <Container fluid>
        <Row>
           <Col size="sm-12">
            <Jumbotron>
              <h1>Home, Bitch</h1>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;