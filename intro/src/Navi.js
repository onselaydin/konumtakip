import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
  } from 'reactstrap';

export default class Navi extends Component {
    render() {
        return (
            <div>
              <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Nortwind App</NavbarBrand>
                <NavbarToggler  />
                <Collapse navbar>
                  <Nav className="mr-auto" navbar>
                    <NavItem>
                      <NavLink href="/components/">Components</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                    </NavItem>
                  </Nav>
                    <NavbarText>{ this.props.cart.length}</NavbarText>
                </Collapse>
              </Navbar>
            </div>
          );
    }
}
