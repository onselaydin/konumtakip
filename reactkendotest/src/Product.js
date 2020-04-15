import React, { Component } from "react";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import ProductConsumer from "./context";

export default class Product extends Component {
  render() {
    //console.log(this.props.products);
    return (
      <ProductConsumer>
        {value => {
          const { products } = value;
          return (
            <div>
              {/* <h3>{this.props.title}</h3> */}

              <Grid style={{ height: "400px" }} data={products}>
                <Column field="id" title="ID" width="40px" />
                <Column field="name" title="Name" width="250px" />
                <Column field="categoryId" title="Category Id" />
                <Column field="price" title="Price" />
                <Column field="description" title="Description" />
              </Grid>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
