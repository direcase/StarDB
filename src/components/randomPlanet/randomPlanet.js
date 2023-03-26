import React, { Component } from "react";
import SwapiServise from '../../services/swapiService'
import ErrorIndicator from "../errorIndicator/errorIndicator";
import Spinner from "../spinner";
import './randomPlanet.css';

export default class RandomPlanet extends Component{

    swapiServise = new SwapiServise();

    state = {
         planet: {},
         loading: true,
         error: false,
        // id: null,
        // name: null,
        // population: null,
        // rotationPeriod: null,
        // diameter: null
    };

    constructor(){
        super();
        this.updatePlanet();
        setInterval(this.updatePlanet, 2500);
    }

    onPlanetLoaded = (planet)=>{
        this.setState({
            planet,
            loading: false
        })
        
    }

    onError=(err)=>{
        this.setState({
            error: true,
            loading: false
        })
    }

    updatePlanet=()=>{
        const id =Math.floor(Math.random()*25+1);
        this.swapiServise.getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
    }
    render(){
        const { planet, loading, error} = this.state;
        const hasData = !(error || loading);
        const errorMessage = error ? <ErrorIndicator /> : null; 
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <PlanetView planet={planet} /> : null;
        return(
            <div className="details card container-fluid border-secondary flex-row">   
                {errorMessage}
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