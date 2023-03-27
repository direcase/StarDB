import React from "react";
import SwapiService from "../../services/swapiService";

import './peoplePage.css'

const Row=()=>{
    return(
        <div className='row mb2'>
          <div className="col-md-6">
            <ItemList getData={this.swapiService.getAllPeople} 
            renderItem={(item)=>`${item.name} (${item.gender}, ${item.birthYear})`}     />
          </div>
          <div className="col-md-6">
            <PersonDetails />
          </div>
        </div>

    )
}

export class PeoplePage extends Comment{
    swapiService = new SwapiService();

    
}