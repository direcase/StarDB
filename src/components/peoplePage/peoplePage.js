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

    render(){
      const itemList = (
        <ItemList getData={this.swapiService.getAllPeople} 
         >
          {
            (item)=>(`${item.name} (${item.gender}, ${item.birthYear})`)
          }
        </ItemList>
        
      );

      const detialItem = (
        <PersonDetails />
      );

      return(
        <ErrorBoundry>
          <Row left={itemList} right={detialItem} />
        </ErrorBoundry>
      )


    }
}