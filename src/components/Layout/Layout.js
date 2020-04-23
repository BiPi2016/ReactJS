import React from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';

import Auxilery from '../../HOC/Auxilery';
import classes from './Layout.module.css';

const Layout = (props) => (  
    <Auxilery>
        <div>Toolbar, Sidedrawer, Backdrop</div>
        <Toolbar />
        <Sidedrawer />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxilery>
);

export default Layout;

