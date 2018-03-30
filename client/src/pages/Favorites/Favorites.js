import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

class Favorites extends Component {
  state = {
    favorites: []
  };

  componentDidMount() {
    this.loadFavorites();
  }

  loadFavorites = () => {
    API.getFavorites()
      .then(res =>
        this.setState({favorites: res.data})
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
              <h1>Favorite Ipsums</h1>
            </Jumbotron>
            {this.state.favorites.length ? (
              <List>
                {this.state.favorites.map(favorite => (
                  <ListItem key={favorite._id}>
                    <Link to={"/ipsums/" + favorite._id}>
                      <strong>
                        {favorite.title + " "}
                      </strong>
                    </Link>
                      <a href={favorite.url} target="_blank">Try me!</a>
                      <br></br>
                      <p>{favorite.sample}</p>
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

export default Favorites;
