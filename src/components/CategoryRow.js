import React from 'react'

const CategoryRow = React.createClass({
	propTypes: {
		category: React.Proptypes.string,
	},
  render(){  	  
    return (
    <tr>
       <th colSpan="2">
        {this.props.category}
       </th> 
     </tr>
    );
  }
});

export default CategoryRow;