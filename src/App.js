import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar'
import ProductTable from './components/ProductTable'

const App = React.createClass({

	// propTypes: {
	// 	product
	// }
	
	// getInitialState() {
	// 	return {
	// 		filterText: '',
	// 		inStockOnly: false,
	// 	};
	// },

	handleUserInput(filterText, inStockOnly) {
		this.setState({filterText, inStockOnly});
	},

  render() {
    return (
      <div>
        <SearchBar 
        	filterText={this.state.filterText} 
        	inStockOnly={this.state.inStockOnly}
        	onUserInput={this.handleUserInput} />
        <ProductTable 
        	products={this.props.products}
        	filterText={this.state.filterText}
        	inStockOnly={this.state.inStockOnly} />
      </div>
    );
  }
});


export default App;