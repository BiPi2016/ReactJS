import React from 'react';

import Auxilery from '../../HOC/Auxilery';
import classes from './Layout.css';

const Layout = (props) => (  
    <Auxilery>
        <div>Toolbar, Sidedrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxilery>
);

export default Layout;

