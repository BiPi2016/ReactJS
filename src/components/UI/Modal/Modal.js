import React from 'react';
import classes from './Modal.module.css';

import Backdrop from '../Backdrop/Backdrop';
import Auxilery from '../../../HOC/Auxilery';

const Modal = props => {/* 
    if(!props.show) {
        console.log('No showing')
        return null;
    }
    console.log('Showing summary') */
    return(
        <Auxilery>
            <Backdrop
             show={props.show}
             clicked={props.purchaseCancelledHandler}
             />
            <div className={classes.Modal}
             style={{
                 transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                 opacity: props.show ? '1' : '0'
             }}>
                
                {props.children}
            </div>

        </Auxilery>
    );
}

export default Modal;