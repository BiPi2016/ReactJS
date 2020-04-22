import React from 'react';
import classes from './Modal.module.css';

const Modal = props => {
    if(!props.show) {
        console.log('No showing')
        return null;
    }
    console.log('Showing summary')
    return(
        <div className={classes.Modal}>
            {props.children}
        </div>
    );
}

export default Modal;