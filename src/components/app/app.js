import React, { Component } from 'react';
import SwapiService from '../../services/swapiService';

import Header from '../header';
import ItemList from '../itemList';
import PeoplePage from '../peoplePage';
import PersonDetails from '../personDetails/personDetails';
import RandomPlanet from '../randomPlanet/randomPlanet';

import './app.css';

export default class App extends Component {

   swapiService = new SwapiService();

  render(){
    return (
      <div>
        <Header />
  
        <RandomPlanet />

        <PeoplePage />
        
        <div className='listDetails row mb2'>
          <div className='col-md-4'>
            
          <ItemList getData={this.swapiService.getAllPlanets}
          renderItem={(item)=>(<span>{item.name} <button>+</button></span>)} />
          </div>
          <div className='col-md-8'>
            <PersonDetails />
          </div>
          
        </div>


        <div className='listDetails d-flex'>
          <div>
            
          <ItemList getData={this.swapiService.getAllStarships}
          renderItem={(item)=>item.name} />
          </div>
          <PersonDetails />
        </div>
      </div>
    )
  }
  
};
