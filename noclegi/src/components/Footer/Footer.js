import { useContext } from 'react';
import ThemeContext from '../../context/themeContext';

function Footer(){
  const theme = useContext(ThemeContext);

  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
        © 2021 Copyright:
        <a className={`text-${theme.theme}`} href="#"> Noclegi </a>
      </div>
    </footer>
  );
}

export default Footer;