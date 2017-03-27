import React from 'react'

const SearchBar = React.createClass({
  
  propTypes: {
    onUserInput: React.PropTypes.func,
    filterText: React.PropTypes.string,
    inStockOnly: React.PropTypes.bool,
  },

  handleChange() {
    this.props.onUserInput(
      this.refs.filterTextInput.value,
      this.refs.inStockOnlyInput.checked,
    );
  },
  
  render(){
    return (
      <form>
        <input
          type="text" 
          placeholder="Search..."
          value={this.props.filterText}
          ref="filterTextInput"
          onChange={this.handleChange} />    
          
        <p>
          <input 
            type="checkbox" 
            checked={this.props.inStockOnly}
            ref="inStockOnlyInput"
            onChange={this.handleChange} />
          {' '} Show in stock items only
        </p>
      </form>
    )
  }
});

export default SearchBar;