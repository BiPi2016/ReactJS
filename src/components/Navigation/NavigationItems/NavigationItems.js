import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => {
    return(
        <ul className={classes.NavigationItems}>
            <NavigationItem
             active={true}
             link='/'>
                Burger Builder
            </NavigationItem>
            <NavigationItem link='/Checkout'>
                Checkout
            </NavigationItem>
        </ul>
    )
}

export default NavigationItems;