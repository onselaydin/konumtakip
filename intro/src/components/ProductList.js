import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class ProductList extends Component {

  
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <h3>{this.props.info.baskaBisey}</h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category Id</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(p => (
              <tr key={p.id}>
                <th scope="row">{p.id}</th>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>{p.categoryId}</td>
                <td>{p.description}</td>
                <td><Button onClick={()=>this.props.addToChart(p)} color="info">Add</Button>{' '}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
