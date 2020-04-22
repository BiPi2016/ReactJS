import React from 'react';
import classes from './Backdrop.module.css';

const Backdrop = props => {
        if(!props.show) {
            return null
        }
    return(
        <div
         className={classes.Backdrop}
         onClick={props.clicked}>
        </div>        
    );
}

export default Backdrop;