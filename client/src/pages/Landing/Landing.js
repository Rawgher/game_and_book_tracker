import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Nav from "../../components/Nav";
import { Col, Row, Container } from "../../components/Grid";

class Landing extends Component {
  render() {
    return (
      <Container fluid>
        <Nav />
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>THIS IS THE LANDING PAGE</h1>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Landing;
