import React from 'react';

import Button from '../../UI/Button/Button';

const OrderSummary = props => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return(<li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>)
        })
    return(
        <div>
            <h3>Your Order</h3>
            <p>Burger with following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p style={{
                color: 'blue'
            }}>
                Total price: 
                <strong>{` ${props.totalPrice} $`}</strong>
            </p>
            <Button
             type="Danger"
             clicked={props.purchaseCancelledHandler}>
                cancel
            </Button>
            <Button
             type="Success"
             clicked={props.purchaseContinueHandler} >
                proceed to pay
            </Button>
            <p>Continue to checkout</p>
        </div>
    );
}

export default OrderSummary;