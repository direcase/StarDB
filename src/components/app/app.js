import React from 'react';

import Header from '../header';
import ItemList from '../itemList';
import PersonDetails from '../personDetails/personDetails';
import RandomPlanet from '../randomPlanet/randomPlanet';

import './app.css';

const App = () => {
  return (
    <div>
      <Header />

      <RandomPlanet />
      <div className='listDetails d-flex'>
        <div>
          
        <ItemList />
        </div>
        <PersonDetails />
      </div>
    </div>
  )
};

export default App