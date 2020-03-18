import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  state = {
    categories: []
  };

  componentDidMount(){
      this.getCategories();
  }
  
  
  getCategories = ()=> {
      fetch("http://localhost:3000/categories")
      .then(res=>res.json())
      .then(data=>this.setState({categories:data}));
  }

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <ListGroup>
          {this.state.categories.map(c => (
            <ListGroupItem active={c.name===this.props.currentCategory?true:false}
              onClick={() => this.props.changeCategory(c)}
              key={c.id}
            >
              {c.name}
            </ListGroupItem>
          ))}
        </ListGroup>
        {/* <h4>{this.props.currentCategory}</h4> */}
      </div>
    );
  }
}
