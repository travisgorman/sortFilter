import React from 'react'

const SearchBar = React.createClass({

  propTypes: {
    filterText: React.PropTypes.string,
    inStockOnly: React.PropTypes.bool,
    onFilterTextInput: React.PropTypes.func,
    onInStockInput: React.PropTypes.func,
  },

  handleFilterTextInputChange(e) {
    e.preventDefault()
    this.props.onFilterTextInput(e.target.value);
  },

  handleInStockInputChange(e) {
    this.props.onInStockInput(e.target.check);
  },

  render() {
    return (  
      <form className="SearchBar">
        <input 
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextInputChange} />
        <p>
          <input 
            type="checkbox" 
            checked={this.props.inStockOnly}
            onChange={this.handleInStockInputChange} />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
})

export default SearchBar;