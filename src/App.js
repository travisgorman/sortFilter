import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar'
import ProductTable from './components/ProductTable'

const App = React.createClass({
  propTypes: {
    products: React.PropTypes.array,    
  },

  getInitialState(){
    return {
      filterText: '',
      inStockOnly: false,
    };
  },
  
  handleInStockInput(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    });
  },

  handleFilterTextInput(filterText) {
    this.setState({
      filterText: filterText
    });
  },
  
  
  render() {
    return (  
      <div className="App">
        <SearchBar 
          inStockOnly={this.state.inStockOnly}
          filterText={this.state.filterText}
          onInStockInput={this.handleInStockInput}
          onFilterTextInput={this.handleFilterTextInput} />
        <ProductTable 
          inStockOnly={this.state.inStockOnly}
          filterText={this.state.filterText}
          products={this.props.products} />
      </div>
    );
  }
});


export default App;