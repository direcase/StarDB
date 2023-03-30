import React, { Component } from 'react';
import SwapiService from '../../services/swapiService';
import ErrorIndicator from '../errorIndicator/errorIndicator';

import Header from '../header';
import PersonDetails, {Record} from '../personDetails/personDetails';
import Row from '../row';

import './app.css';

export default class App extends Component {

  state = {
    hasError: false,
  }

   swapiService = new SwapiService();

  componentDidCatch(){
    console.log('componentDidCatch(');
    this.setState({ hasError: true});
  }

  render(){
    if(this.state.hasError){
      return <ErrorIndicator />
    }

    const leftItem = (
      <PersonDetails personId="5" getData={this.swapiService.getPerson} getImg={this.swapiService._getPersonImg} >
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
      </PersonDetails>
    );

    const rightItem = (
      <PersonDetails personId="3" getData={this.swapiService.getStarsip} getImg={this.swapiService._getStarsipImg} />
    );
    return (
      <div >
        <Header />
        <div className='main'>
          {/* <RandomPlanet /> */}
          

          {/* <PeoplePage /> */}

          <Row left={leftItem} right={rightItem} />

          {/* <div className='listDetails row mb2'>
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
          </div> */}

        </div>
  
        
      </div>
    )
  }
  
};
