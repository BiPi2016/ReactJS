import React from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';

import Auxilery from '../../HOC/Auxilery';
import classes from './Layout.module.css';

class Layout extends React.Component{

    state = {
        showSidedrawer: false
    };

    sidedrawerCloseHandler = () => {
        this.setState( prevState => {
            return {
                showSidedrawer: !prevState.showSidedrawer
            }
        });
    };
    
    render = () => {  
        return(
            <Auxilery>
                <Toolbar menuButtonHandler={this.sidedrawerCloseHandler}/>
                <Sidedrawer
                 open={this.state.showSidedrawer}
                 clicked={this.sidedrawerCloseHandler}
                 />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxilery>
        );
    }
}

export default Layout;

