import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Nav from "../../components/Nav";

class Landing extends Component {
  render() {
    return (
      <div className="fl w-100">
        <Nav />
        <Jumbotron>
          <h1>THIS IS THE LANDING PAGE</h1>
        </Jumbotron>
      </div>
    );
  }
}

export default Landing;
