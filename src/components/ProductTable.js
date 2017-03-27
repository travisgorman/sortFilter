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

    // let rows = [];
    // let lastCategory = null;
    // this.props.products.forEach((product, key) => {
    //   if (product.category !== lastCategory) {
    //     rows.push(<CategoryRow category={product.category} key={key}/>);
    //   } else rows.push(<ProductRow key={product.name} product={product}/>);
    // });

    var rows = [];
    
    // a placeholder to see when the category has changed
    var lastCategory = null;
    
    // Loop through and push components to the 'row' array
    this.props.products.forEach(function(product) {
      // for each product, check if the type-ahead search and the stocked condition match
      if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
        return;
      }
      
      // Check if the catefory has changed - only works if the data is sorted
      if (product.category !== lastCategory) {
        rows.push(<CategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
      
    }.bind(this)); // Binding the child component updates to the parent?????

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
    );
  }
});

export default ProductTable;