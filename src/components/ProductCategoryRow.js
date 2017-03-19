import React from 'react'

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

export default ProductCategoryRow;