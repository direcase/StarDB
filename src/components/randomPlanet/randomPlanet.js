import React, { Component } from "react";
import SwapiServise from '../../services/swapiService'
import './randomPlanet.css';

export default class RandomPlanet extends Component{

    swapiServise = new SwapiServise();

    state = {
        id: null,
        name: null,
        population: null,
        rotationPeriod: null,
        diameter: null
    };

    constructor(){
        super();
        this.updatePlanet();
    }

    updatePlanet(){
        const id =Math.floor(Math.random()*25+3);
        this.swapiServise.getPlanet(id)
            .then((planet)=>{
            this.setState({
                id: id,
                name: planet.name,
                population: planet.population,
                rotationPeriod: planet.rotation_period,
                diameter: planet.diameter
            });
        });
    }
    render(){
        const {id, name, population, rotationPeriod, diameter} = this.state;
        return(
            <div className="details card border-secondary flex-row">
                    <img width='200rem' height='auto' className="rounded float-left" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
                
                <div className="details-row float-right">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"> <h4>Name: {name}</h4></li>
                        <li className="list-group-item">Population: {population}</li>
                        <li className="list-group-item">Rotation Period: {rotationPeriod}</li>
                        <li className="list-group-item">diameter: {diameter}</li>
                    </ul>
                </div>
                
                
            </div>
        )
    }
    
}
