import React, { Component } from "react";
import Navi from "./components/Navi";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] };

  changeCategory = category => {
    this.setState({ currentCategory: category.name });
    this.getProducts(category.id);
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = productId => {
    let url = "http://localhost:3000/products";
    if (productId) {
      url += "?categoryId=" + productId;
    }

    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ products: data }));
  };

  addToChart=(product)=>{
    //alert(product.name);
    let newCart = this.state.cart;
    //Bu ürün sepette varmıyı kontrol edeceğiz.
    var addedItem = newCart.find(c=>product.id === c.id);
    if(addedItem){
      addedItem.quantity+=1;
    }
    else {
      newCart.push({product:product,quantity:1});
    }
    this.setState({cart:newCart});

  }

  render() {
    let titleCategory = "Kategori Listesi**";
    let urunInfo = { title: "Ürün Listesi", baskaBisey: "bisey" };
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Navi cart={this.state.cart}/>
            </Col>
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                title={titleCategory}
              />
            </Col>
            <Col xs="9">
              <ProductList info={urunInfo} products={this.state.products} addToChart= { this.addToChart }/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
