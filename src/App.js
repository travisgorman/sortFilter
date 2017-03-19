import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar'
import ProductTable from './components/ProductTable'

const App = React.createClass({
  propTypes: {
    products: React.PropTypes.array,
  },
  render() {
    return (  
      <div className="App">
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
});



export default App;