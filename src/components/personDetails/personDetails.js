import React from "react";

import './personDetails.css';

const PersonDetails=()=>{
    return(
        <div className="detail card">
            <div className="card-header">Details</div>
            <div className="details-row">
                {/* <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <h4>Dariya Bigabulova</h4></li>
                    <li className="list-group-item">Some quick example text to build on the card title and make up the bulk of t</li> */}
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                
                
            </div>
            
        </div>
    )
}
export default PersonDetails;