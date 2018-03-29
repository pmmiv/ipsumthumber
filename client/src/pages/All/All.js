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

  render() {
    return (
      <Container fluid>
        <Row>
           <Col size="sm-12">
            <Jumbotron>
              <h1>All the Ipsums</h1>
            </Jumbotron>
            {this.state.ipsums.length ? (
              <List>
                {this.state.ipsums.map(ipsum => (
                  <ListItem key={ipsum._id}>
                    <Link to={"/ipsums/" + ipsum._id}>
                    </Link>
                      <strong>
                        {ipsum.title + " "}
                      </strong>
                      <a href={ipsum.url}>Try me!</a>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default All;
