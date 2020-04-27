import React from 'react';

import classes from './Sidedrawer.module.css'

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxilery from '../../../HOC/Auxilery';

const Sidedrawer = props => {
    /* if(!props.open) {
        return null;
    } */
    let attachedClasses = [classes.Sidedrawer, classes.Close];
    if(props.open) {
        attachedClasses = [classes.Sidedrawer, classes.Open];
    }

    return(
        <Auxilery>
            <Backdrop
             show={props.open}
             clicked={props.clicked}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>            
                <nav>
                    <NavigationItems />
                </nav>
                
            </div>
        </Auxilery>
    );
}

export default Sidedrawer;