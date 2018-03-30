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
              <h1>Welcome to the Ipsum Thumber</h1>
              <p>Where you can sample a few cool ipsums for your next website.</p>
              <p>Use the nav bar to select how you want to meet your next ipsum.</p>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
