import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Input, TextArea, FormBtn, Stars } from "../../components/Form";

class one extends Component {
  state = {
    ipsum: {},
    comment: "",
    savedComments: []
  };

  componentDidMount() {
    this.loadIpsum()
  };

  loadIpsum = () => {
    API.getIpsum(this.props.match.params.id)
      .then(res =>
        this.setState({ipsum: res.data}),
      )
      .catch(err => console.log(err));
  };

  favorite = id => {
    let query = {};
    let message = "";
    if (this.state.ipsum.favorite) {
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

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({[name]: value});
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("save comment init");
    if (this.state.comment) {
      API.saveComment({
        comment: this.state.comment,
      }, this.props.match.params.id)
        .then(res => alert("Thank you for your submission!"))
        .catch(err => console.log(err));
    }
    // this.setState({savedComments: res.data})
    console.log("Save comment exited");
  };

  // handleRatingChange = () => {
  //   const {rating} = this.form;
  //   // this.setState({rating: form.rating})
  //   console.log(rating, rating.value);
  // }

  return = () => {
    window.history.back();
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
                  {this.state.ipsum.title}
              </h1>
              <p>
                  Here's a sample: <br></br>
                {this.state.ipsum.sample}
              </p>
              <button className="btn btn-danger" onClick={this.return}>← Back</button>
              <span> </span>
              <a className="btn btn-primary" target="_blank" href={this.state.ipsum.url}>Try me</a>
              <span> </span>
              <button className="btn btn-success" onClick={() => this.favorite(this.state.ipsum._id)}>

                {this.state.ipsum.favorite
                  ? "Unfavorite"
                  : "favorite"}
              
              </button>
            </Jumbotron>
          </Col>
          <Col size="md-1">
          </Col>
        </Row>
        <Row>
          <Col size="md-1">
          </Col>
          <Col size="md-5">
            <form>
            <h2>Thoughts on this Ipsum?</h2>
            <TextArea 
              name="comment"
              placeholder="Leave a comment... (This doesn't work)"
              onChange={this.handleInputChange}
              value={this.state.comment}/>
            <FormBtn disabled={!(this.state.comment)} onClick={this.handleFormSubmit}>Submit Review</FormBtn>
            </form>
          </Col>
          <Col size="md-5">
          <span>This is where comments will eventually go.</span>
          </Col>
          <Col size="md-1">
          </Col>
        </Row>
      </Container>
    );
  }
}

export default one;
