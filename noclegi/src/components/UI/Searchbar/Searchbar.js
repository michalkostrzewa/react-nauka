import { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../../../context/themeContext';


const propTypes = {
  onSearch : PropTypes.func.isRequired
}

function Searchbar(props){
  const [term, setTerm] = useState('');
  const theme = useContext(ThemeContext);

  const inputRef = useRef(null);

  const search = () =>{
    props.onSearch(term);
  }
  const onKeyDownHandler = e =>{
    if( e.key === 'Enter'){
      search();
    }
  }

  const focusInput = () => {
    inputRef.current.focus()
    // const input = document.querySelector('.search');
    // input.focus();

  }

  useEffect(() => {
    focusInput()
  }, [])

  return (
    <div className="d-flex">
      <div className="form-group">
        <input 
          ref={inputRef}
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