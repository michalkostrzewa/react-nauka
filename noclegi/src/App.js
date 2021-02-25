import React, { Component, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Hotels from './components/Hotels/Hotels';

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

  const searchHandler = (term) =>{
    const serchedHotels = [...hotels].filter(x => x.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()));
    setCurrentHotels(serchedHotels);
  }

  return (
    <div className="App">
      <div className="container">
        <Header onSearch={searchHandler}/>
        <Menu/>
        <Hotels hotels={currentHotels}/>
      </div>
    </div>
  );
}

export default App;
