import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

// const ProductTable = React.createClass({
//   propTypes: {
//     products: React.PropTypes.array,
//     inStockOnly: React.PropTypes.bool,
//     filterText: React.PropTypes.string,
//   },
//   render() {
//     const rows = [];
//     let lastCategory = null;

//     this.props.products.forEach((product) => {
//       if (product.category !== lastCategory) {
//         rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
//       }
//       rows.push(<ProductRow product={product} key={product.name} />);
//       lastCategory = product.category;
//     });

//     return (  
//       <table className="ProductTable">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Price</th>
//           </tr>
//         </thead>
//         <tbody>
//           {rows}d
//         </tbody>
//       </table>
//     );
//   }
// });

const ProductTable = React.createClass({
  render() {
    let rows = [];
    let lastCategory = null;
    console.log(this.props.inStockOnly)

    this.props.products.forEach((product) => {
      if (product.name.indexOf(this.props.filterText) === -1 ||
      (!product.stocked && this.props.inStockOnly)) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow 
            category={product.category} 
            key={product.category}/>
        );
      }
      rows.push(  
        <ProductRow
          category={product.category}
          key={product.category}/>
      );
      lastCategory = product.category;
    });
    
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
    );
  }
});

export default ProductTable;