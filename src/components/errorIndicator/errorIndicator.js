import React from "react";

import './errorIndicator.css';
import errorIcon from './404-error.png';
const ErrorIndicator=()=>{
    return(
        <div class="alert" role="alert">
            <img src={errorIcon} alt='error icon' width='50px' />
            <p>
            Something went wrong. Please, try again</p>
        </div>
    )
}
export default ErrorIndicator;