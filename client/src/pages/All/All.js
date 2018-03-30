import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

class All extends Component {
  state = {
    ipsums: []
  };

  componentDidMount() {
    this.loadIpsums();
  }

  loadIpsums = () => {
    API.getIpsums()
      .then(res =>
        this.setState({ipsums: res.data})
      )
      .catch(err => console.log(err));
  };

  loadIpsum = () => {
    API.getIpsums()
      .then(res =>
        this.setState({ipsums: res.data})
      )
      .catch(err => console.log(err));
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
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="sm-1" />
          <Col size="sm-10">
            <Jumbotron>
              <h1>All the Ipsums</h1>
            </Jumbotron>
            {this.state.ipsums.length ? (
              <List>
                {this.state.ipsums.map(ipsum => (
                  <ListItem key={ipsum._id}>
                    <Link to={"/ipsums/" + ipsum._id}>
                      <strong>
                        {ipsum.title + " "}
                      </strong>
                    </Link>
                      <a href={ipsum.url}  target="_blank">Try me!</a>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          <Col size="sm-1" />
        </Row>
      </Container>
    );
  }
}

export default All;
