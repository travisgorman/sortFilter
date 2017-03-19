import React from 'react';
import ReactDOM from 'react-dom';
import PRODUCTS from './data'
import './index.css';


const FilterableProductTable = React.createClass({
  propTypes: {
    products: React.PropTypes.array,
  },
  render() {
    return (  
      <div className="FilterableProductTable">
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
});
// SearchBar
const SearchBar = React.createClass({
  render() {
    return (  
      <form className="SearchBar">
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />
            {' '}
          Only show products in stock
        </p>
      </form> 
    );
  }
});
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
// ProductCategoryRow
const ProductCategoryRow = React.createClass({
  propTypes: {
    category: React.PropTypes.string,
  },
  render() {
    return (  
      <tr className="ProductCategoryRow">
        <th colSpan="2" >{this.props.category}</th>
      </tr>
    );
  }
});
// ProductRow
const ProductRow = React.createClass({
  propTypes: {
    product: React.PropTypes.object,
  },
  render() {
    let name = 
      this.props.product.stocked ? this.props.product.name :
        <span style={{color: 'red'}}>{this.props.product.name}</span>;
    return (  
      <div className="ProductRow">
        <tr>
          <td>{name}</td>
          <td>{this.props.product.price}</td>
        </tr>
      </div>
    );
  }
});


ReactDOM.render(
  <FilterableProductTable products={PRODUCTS}/>,
  document.getElementById('root')
);
