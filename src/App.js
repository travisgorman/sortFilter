import React from 'react';
import './App.css';

var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];


const App = React.createClass({
  render() {
    return (  
      <div className="App">
         <Search />
         <Table />
      </div>
    )
  }
})

const Search = React.createClass({
  render() {
    return (  
      <form className="Search">
        <input type="text" placeholder="Search..." />
        <input type="submit" hidden />
        <div className="filter">          
          <input type="checkbox" />
          <p>Only Show Products in Stock</p>
        </div>
      </form>
    )
  }
})

const Table = React.createClass({
  render() {
    const product = PRODUCTS.map( (product, i ) => {
      return (  
        <ProductItem 
          key={i} 
          category={product.category} 
          stocked={product.stocked} 
          price={product.price} 
          name={product.name} />
      )
    });
    return (  
      <div className="Table">
        <header><span>Name</span><span>Price</span></header>
        <ul className="category-rows">        
          {product}
        </ul>
      </div>
    )
  }
})

const ProductItem = React.createClass({
  render() {
    return (  
      <div className="ProductItem">
        <h4>{this.props.category}</h4>
        <h5>{this.props.name}</h5>
        <h5>{this.props.price}</h5>
        <h5>{this.props.stocked}</h5>
      </div>
    )
  }
})


export default App;
