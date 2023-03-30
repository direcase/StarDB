import React, { Component } from "react";
import SwapiService from "../../services/swapiService";
import ErrorIndicator from "../errorIndicator/errorIndicator";
import ItemList from "../itemList/itemList";
import PersonDetails from "../personDetails/personDetails";
import Row from "../row";

import './peoplePage.css'

class ErrorBoundry extends Component{
  state = {
    hasError: false
  }

  componentDidCatch(){
    this.setState({
      hasError:true
    })
  }
  render(){
    if( this.state.hasError){
      return <ErrorIndicator />
    }
    return this.props.children;
  }
}

export default class PeoplePage extends Component{
    swapiService = new SwapiService();
    state = {
      selectedPerson: 6,
    }
    onPersonSelected = (id) =>{
      this.setState({
        selectedPerson: id
      })
    }
    render(){
      const itemList = (
        <ItemList getData={this.swapiService.getAllPeople} 
          onItemSelected={this.onPersonSelected}
         >
          {
            (item)=>(`${item.name} (${item.gender}, ${item.birthYear})`)
          }
        </ItemList>
        
      );

      const detialItem = (
        <PersonDetails personId={this.state.selectedPerson} />
      );

      return(
        <ErrorBoundry>
          <Row left={itemList} right={detialItem} />
        </ErrorBoundry>
      )


    }
}