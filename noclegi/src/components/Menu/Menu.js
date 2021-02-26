import { useContext } from 'react';
import AuthContext from '../../context/authContext';

function Menu(){
  const auth = useContext(AuthContext);

  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">
          <a href="#">Home</a>
        </li>
        <li className="list-group-item">
        {auth.isAuthenticated 
            ? <a href="#" onClick={auth.logout}>Wyloguj</a>
            : <a href="#" onClick={auth.login}>Zaloguj</a>}
        </li>
      </ul>
    </div>
  );
}

export default Menu;