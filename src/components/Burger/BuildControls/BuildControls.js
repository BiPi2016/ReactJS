import React from 'react';
import classes from './BuildControls.module.css';

import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const BuildControls = props => {
    return(
        <div className={classes.BuildControls}>
            <p>Current Price: 
                <strong> {props.price.toFixed(2)}</strong>
            </p>
            {
                controls.map( control => <BuildControl
                 label={control.label}
                 type={control.type} 
                 key={control.label}
                 disabled={props.disabled[control.type]}
                 ingredientAdded={props.ingredientAdded}
                 ingredientRemoved={() => props.ingredientRemoved(control.type)}
                />)
            }
            <button className={classes.OrderButton}
                disabled={!props.purchasabale}
                onClick={props.ordered}>ORDER NOW</button>
        </div>
    );
};

export default BuildControls;