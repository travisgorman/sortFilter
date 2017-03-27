import React from 'react'
import CategoryRow from './CategoryRow';
import ProductRow from './ProductRow';

const ProductTable = React.createClass({

  propTypes: {
    products:    React.PropTypes.array,
    inStockOnly: React.PropTypes.bool,
    filterText:  React.PropTypes.string,
  },
  
  render(){
    let rows = [];
    let lastCategory = null;

    this.props.products.forEach((product,key) =>{

      // if (product.name.indexOf(this.props.filterText) === -1 || 
      //   (!product.stocked && this.props.inStockOnly)) {
      //   return;
      // }

      if (product.category !== lastCategory) {
        rows.push(  
          <CategoryRow
            category={product.category}
            key={key} /> 
        );
      }
      rows.push(  
        <ProductRow 
          product={product}
          key={product.name} /> 
      );
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
});

export default ProductTable;