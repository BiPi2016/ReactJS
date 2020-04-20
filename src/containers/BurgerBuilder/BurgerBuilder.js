import React, {Component} from 'react';

import Auxilery from '../../HOC/Auxilery';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    /* constructor(props) {
        super(props);
        this.state = {};
    } */

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    };

    render() {
        return(
            <Auxilery>
                <Burger ingredients={this.state.ingredients} />
                <div>Build Control</div>
            </Auxilery>
        );
    }
}

export default BurgerBuilder;

