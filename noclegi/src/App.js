import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import Hotels from './components/Hotels/Hotels';
import Searchbar from './components/UI/Searchbar/Searchbar';
import Layout from './components/Layout/Layout';
import ThemeButton from './components/UI/ThemeButton/ThemeButton';
import ThemeContext from './context/themeContext';
import AuthContext from './context/authContext';


function App(){
  const hotels=[
      {
        id: 1,
        name: 'Pensjonat trzy korony',
        city: 'Krościenko',
        rating: 8.3,
        description: 'Oferujący bezpłatny dostęp do Internetu i parking położony jest w centrum krościenka, w odległości 1,3 km od głównego dworca kolejowego. Oferuje on klasycznie urządzone pokoje z telewizorem LCD z kanałami telewizji satelitarnej.',
        image: ''
      },
      {
        id: 2,
        name: 'Dom',
        city: 'Łowicz',
        rating: 6.2,
        description: 'Oferujemy płatny dostęp do Internetu',
        image: ''
      },
      {
        id: 3,
        name: 'Hotel pod 3 gwiadami',
        city: 'Szczwnica',
        rating: 7.7,
        description: 'Oferujemy bezpłatny dostęp do Internetu',
        image: ''
      },
    ]

  const [currentHotels, setCurrentHotels] = useState([...hotels]);
  const [theme, setTheme] = useState('primary');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const searchHandler = (term) =>{
    const serchedHotels = [...hotels]
      .filter(x => x.name
          .toLowerCase()
          .includes(term.toLowerCase()));
    setCurrentHotels(serchedHotels);
  }

  const changeTheme = () =>{
    theme === 'primary' 
      ? setTheme('danger')
      : setTheme('primary')
  }

  const header = (
    <Header>
      <Searchbar 
        onSearch={searchHandler}
      />
      <ThemeButton/>
    </Header>
  );
  const hotel = (
    <Hotels 
      hotels={currentHotels}
    />
  );
  const menu = <Menu/>
  const fotter =<Footer/>

  return (
    <AuthContext.Provider value={{
      isAuthenticated: isAuthenticated,
      login: () => setIsAuthenticated(true),
      logout: () => setIsAuthenticated(false)
      }}>
      <ThemeContext.Provider value={{
        theme: theme,
        changeTheme: changeTheme
        }}>
        <Layout 
          header={header}
          menu={menu}
          content={ hotel}
          footer={fotter}
        />
      </ThemeContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
