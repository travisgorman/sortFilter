import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar'
import ProductTable from './components/ProductTable'

const App = React.createClass({
	getInitialState() {
		return {
			filterText: '',
			inStockOnly: false,
		};
	},
	handleUserInput(filterText, inStockOnly) {
		this.setState({
			filterText,
			inStockOnly,
		});
	},
  render() {
    return (
      <div>
        <Search 
        	filterText={this.state.filterText} 
        	inStockOnly={this.state.inStockOnly}
        	onUserInput={this.handleUserInput} />
        <Table 
        	products={this.props.products}
        	filterText={this.state.filterText}
        	inStockOnly={this.state.inStockOnly} />
      </div>
    );
  }
});


export default App;