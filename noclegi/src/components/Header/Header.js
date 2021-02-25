import React from 'react';
import Searchbar from './Searchbar/Searchbar'

function Header(props){
  return (
    <header>
      <Searchbar onSearch={props.onSearch}/>
    </header>
  );
}

export default Header;