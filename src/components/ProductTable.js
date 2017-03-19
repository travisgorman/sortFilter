import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

// ProductTable
const ProductTable = React.createClass({
  propTypes: {
    products: React.PropTypes.array,
  },
  render() {
    const rows = [];
    let lastCategory = null;
    this.props.products.forEach((product) => {
      if (product.category !== lastCategory) {
        rows.push(  
          <ProductCategoryRow 
            category={product.category} 
            key={product.category} />
        );
      }
      rows.push(  
        <ProductRow
          product={product}
          key={product.name} />  
      );
      lastCategory = product.category;
    });
    return (  
      <table className="ProductTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
});

export default ProductTable;