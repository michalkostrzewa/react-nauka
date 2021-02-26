import { useReducer, useEffect } from 'react';
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
import LoadingIcon from './components/UI/LoadingIcon/LoadingIcon';

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
];

const reducer = (state, action) => {
  switch (action.type){
    case 'change-theme':
      const theme = state.theme === 'primary' ? 'danger' :'primary';
      return  {...state, theme: theme};
    case 'set-hotels':
      return  {...state, hotels: action.hotels};
    case 'set-loading':
      return {...state, loading: action.loading };
    case 'login':
        return  {...state, isAuthenticated: true};
    case 'logout':
        return  {...state, isAuthenticated: false};
    default:
      throw new Error(action.type);
  }
 
}

const initialState = {
  hotels: [],
  loading: true,
  isAuthenticated: false,
  theme: 'primary'
}

function App(){
  const [state, dispatch] = useReducer (reducer, initialState); 
  const searchHandler = (term) =>{
    const serchedHotels = [...hotels]
      .filter(x => x.name
          .toLowerCase()
          .includes(term.toLowerCase()));
    //setCurrentHotels(serchedHotels);
    dispatch({type: 'set-hotels', hotels: serchedHotels})
  }

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'set-hotels', hotels: hotels });
      dispatch({ type: 'set-loading', loading: false });
    }, 2000);
  }, []);

  const header = (
    <Header>
      <Searchbar 
        onSearch={searchHandler}
      />
      <ThemeButton/>
    </Header>
  );
  const content = (
    state.loading 
      ? <LoadingIcon />
      : <Hotels hotels={state.hotels} />
  );
  const menu = <Menu/>
  const fotter =<Footer/>

  return (
    <AuthContext.Provider value={{
      isAuthenticated: state.isAuthenticated,
      login: () => dispatch({ type: 'login'}),
      logout: () => dispatch({ type: 'logout'})
      }}>
      <ThemeContext.Provider value={{
        theme: state.theme,
        changeTheme: () => dispatch({ type: 'change-theme'})
        }}>
        <Layout 
          header={header}
          menu={menu}
          content={ content}
          footer={fotter}
        />
      </ThemeContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
