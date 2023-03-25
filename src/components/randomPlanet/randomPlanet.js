import React, { Component } from "react";
import SwapiServise from '../../services/swapiService'
import Spinner from "../spinner";
import './randomPlanet.css';

export default class RandomPlanet extends Component{

    swapiServise = new SwapiServise();

    state = {
         planet: {},
         loading: true
        // id: null,
        // name: null,
        // population: null,
        // rotationPeriod: null,
        // diameter: null
    };

    constructor(){
        super();
        this.updatePlanet();
    }

    onPlanetLoaded = (planet)=>{
        this.setState({
            planet,
            loading: false
        })
        
    }

    updatePlanet(){
        const id =Math.floor(Math.random()*25+2);
        this.swapiServise.getPlanet(id)
            .then(this.onPlanetLoaded);
    }
    render(){
        const { planet, loading} = this.state;
        const spinner = loading ? <Spinner /> : null;
        const content = !loading ? <PlanetView planet={planet} /> : null;
        return(
            <div className="details card container-fluid border-secondary flex-row">   
                {spinner}
                {content}
            </div>
        )
    }
    
}


const PlanetView=({planet})=>{

    const { id, name, population, rotationPeriod, diameter} = planet;
    return(
        <React.Fragment>
                <img width='200rem' height='auto' className="rounded float-left" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
                
                <div className="details-row float-right">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"> <h4>Name: {name}</h4></li>
                        <li className="list-group-item">Population: {population}</li>
                        <li className="list-group-item">Rotation Period: {rotationPeriod}</li>
                        <li className="list-group-item">diameter: {diameter}</li>
                    </ul>
                </div>
        </React.Fragment>
    )
};