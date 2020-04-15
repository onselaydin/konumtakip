// import React, { Component } from "react";
// const UserContext = React.createContext();
//Provider, Consumer
import React, { Component } from "react";
const ProductContext = React.createContext();

export class ProductProvider extends Component {
  state = { products: [] };

  componentDidMount() {
    this.getProducts();
  }
  
  getProducts = async () => {
    await fetch("http://localhost:3000/products")
      .then(res => res.json())
      .then(data => this.setState({ products: data }));
  };

  render() {
    return (
      <ProductContext.Provider value={this.state}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export default ProductConsumer;
