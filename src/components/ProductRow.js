import React from 'react'

const ProductRow = React.createClass({
  propTypes: {
    product: React.PropTypes.object,
  },
  render() {
    let name = this.props.product.stocked ? this.props.product.name :
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

export default ProductRow;