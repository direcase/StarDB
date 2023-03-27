import React, { Component } from "react";
import SwapiService from "../../services/swapiService";
import ItemList from "../itemList/itemList";
import PersonDetails from "../personDetails/personDetails";

import './peoplePage.css'

const Row=({left, right})=>{
    return(
        <div className='row mb2'>
          <div className="col-md-6">
            {left}
          </div>
          <div className="col-md-6">
            {right}
          </div>
        </div>

    )
}

export default class PeoplePage extends Component{
    swapiService = new SwapiService();

    render(){
      const itemList = (
        <ItemList getData={this.swapiService.getAllPeople} 
        renderItem={(item)=>`${item.name} (${item.gender}, ${item.birthYear})`} />
        
      );

      const detialItem = (
        <PersonDetails />
      );

      return(
        <Row left={itemList} right={detialItem} />
      )


    }
}