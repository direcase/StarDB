import React from 'react';

import Header from '../header';
import ItemList from '../itemList';
import PersonDetails from '../personDetails/personDetails';

import './app.css';

const App = () => {
  return (
    <div>
      <Header />
      <div className='listDetails d-flex'>
        <ItemList />
        <PersonDetails />
      </div>
    </div>
  )
};

export default App