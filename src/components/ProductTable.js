import React from 'react'

const ProductTable = React.createClass({
  render(){
    let rows = <tr>I am a row</tr>;
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
})

export default ProductTable;