import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../../../context/themeContext';


const propTypes = {
  onSearch : PropTypes.func.isRequired
}

function Searchbar(props){
  const [term, setTerm] = useState('');

  const theme = useContext(ThemeContext);
  const search = () =>{
    props.onSearch(term);
  }
  const onKeyDownHandler = e =>{
    if( e.key === 'Enter'){
      search();
    }
  }

  return (
    <div className="d-flex">
      <div className="form-group">
        <input 

          value={term}
          onKeyDown={onKeyDownHandler}
          onChange={e => setTerm(e.target.value)}
          className="form-control"
          type="text"
          placeholder="Szukaj..." />
      </div>
      <div>
        <button 
          onClick={search}
          className={`btn btn-${theme.theme}`}>szukaj
        </button>
      </div> 
    </div>
  );
}

Searchbar.propTypes = propTypes

export default Searchbar;