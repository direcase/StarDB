import React, { Component } from "react";
import SwapiService from "../../services/swapiService";
import Spinner from "../spinner";

import './itemList.css';

export default class ItemList extends Component{
    swapiService = new SwapiService();

    state = {
        itemList:null,
    }

    componentDidMount() {
        this.swapiService
          .getAllPeople()
          .then((itemList) => {
            this.setState({
              itemList
            });
          });
    }
    renderItems(arr){
        return arr.map(({id, name})=>{
            return(
                <li className="list-group-item list-group-item-action"
                key={id}
            
                >
                    {name}
                </li>
            )
        })
    }
    render(){
        const {itemList} = this.state;
        if(!itemList){
            return <Spinner />
        }

        const items = this.renderItems(itemList);

        return(
        <div className="list-group m-10">
            {items}
        </div>
    )
    }
    
}