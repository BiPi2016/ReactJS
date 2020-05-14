import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';

import DrawerToggle from '../Sidedrawer/drawerToggle/drawerToggle';
import NavigationItems from '../NavigationItems/NavigationItems';


const Toolbar = props => {
    return(
        <header className={classes.Toolbar}>
            <DrawerToggle
             clicked={props.menuButtonHandler}>
                Menu
            </DrawerToggle>
            <div className={classes.Logo}>
                <Logo />
            </div>
            
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
            
        </header>
    );
};

export default Toolbar;