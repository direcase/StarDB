import React, { Component } from "react";
import SwapiService from "../../services/swapiService";
import Spinner from "../spinner";

import './itemList.css';

export default class ItemList extends Component{
    

    swapiservise = new SwapiService();
    state = {
        itemList:null,
    }

    componentDidMount() {
        const {getData} = this.props;

        getData()
          .then((itemList) => {
            this.setState({
              itemList
            });
          });
    }
    renderItems(arr){
        return arr.map((item)=>{
            const {id} = item;
            const label = this.props.children(item)
            return(
                <li className="list-group-item list-group-item-action"
                key={id}
                onClick = {()=> this.props.onItemSelected(id)}
            
                >
                    {label}
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