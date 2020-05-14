import React from 'react';
import classes from './drawerToggle.module.css';

const DrawerToggle = props => (
    <div className={classes.hamburgerMenuContainer}>
        <div
        className={classes.hamburgerMenu}
        onClick={props.clicked}></div>
    </div>
);

export default DrawerToggle;