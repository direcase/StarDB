import React, { Component } from "react";
import SwapiService from "../../services/swapiService";
import ErrorButton from '../errorButton/errorButton';

import './personDetails.css';

const Record= ({item, field, label})=>{
    return(
        <li className="list-group-item">
            <span className="term">{label} </span>
            <span>{item[field]}</span>
        </li>
    )
}
export{
    Record
}

export default class PersonDetails extends Component{
    swapiService = new SwapiService();

    state = {
        person:null,
        image: null
    }

    componentDidMount(){
        this.updatePerson();
    }

    // componentDidUpdate(prevProps){
    //     if( this.props.personId === prevProps.personId){
    //         this.updatePerson();
    //     }
    // }
    updatePerson=()=>{
        const { personId, getData, getImg } = this.props;
        if (!personId) {
          return;
        }
    
        getData(personId)
          .then((person) => {
            this.setState({ person, image: getImg(person) });
            });
    }
    render(){
        

        const { person, image } = this.state;
        if (!person) {
        return <span>Select a person from a list</span>;
        }

        const { id, name, gender,
              birthYear, eyeColor } = person;
        return(
            <div className="detail card" key = {id}>
                <div className="d-flex flex-row person-details card ">
                    <img className="person-image"
                        src={image}
                        width="30%"
                        alt="character"/>

                    <div className="card-body">
                        <h4>{name} {this.props.personId}</h4>
                        <ul className="list-group list-group-flush">
                           {
                            React.Children.map(this.props.children, (child, idx)=>{

                                return React.cloneElement(child, {person});
                            })
                           }
                            
                        </ul>
                        <ErrorButton />
                    </div>
                </div>
                
            </div>
        )
    }
   
}