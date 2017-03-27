import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar'
import ProductTable from './components/ProductTable'

const App = React.createClass({
  render() {
    return (
      <div>
        <SearchBar  />
        <ProductTable   />
      </div>
    )
  }
})


export default App;