import React, { Component } from "react";
import Product from "./Product";
import { Container, Row, Col } from "reactstrap";
import Proptypetest from "./Proptypetest";

export default class App extends Component {

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs="6">
              {/* <Product products={this.state.products} /> */}
              <Product />
            </Col>
          </Row>
          <Row>
            <Col>
              <Proptypetest title="prop type testidir."/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
