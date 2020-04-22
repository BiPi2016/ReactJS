import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';


const Toolbar = props => {
    return(
        <header className={classes.Toolbar}>
            <div>Menu</div>
            <Logo />
            <nav>Nav </nav>
        </header>
    );
};

export default Toolbar;