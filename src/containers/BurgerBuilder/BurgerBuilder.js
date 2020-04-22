import React, {Component} from 'react';

import Auxilery from '../../HOC/Auxilery';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 1,
    meat: 2,
    bacon: 1
};

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
        },
        totalPrice: 2,
        purchasabale: false,
        purchasing: false
    };

    updatePurchaseState() {
        this.setState( (prevState) => {            
            const ingredients = {
                ...prevState.ingredients
            };
            const sumOfIngr = Object.values(ingredients).reduce((prevValue, value) => prevValue + value, 0);
            console.log('Sum of ingredients ' + sumOfIngr);
            return({
                purchasabale: sumOfIngr > 0
            });
        });
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }
    purchaseCancelledHandler = () => {
        this.setState({purchasing: false});
    }
    purchaseContinueHandler = () => {
        alert('Yet to be implemented');
    }

    addIngredientHandler = type => {
        const oldCount = this.state.ingredients[type];
        this.setState( prevState => {
            const oldCount = prevState.ingredients[type];
            let updatedIngredient = {...prevState.ingredients};
            updatedIngredient[type] = oldCount + 1;
            const priceAddition = INGREDIENT_PRICES[type];
            const newPrice = prevState.totalPrice + priceAddition;
            return { 
                ingredients: updatedIngredient,
                totalPrice: newPrice
            }
        });
        this.updatePurchaseState();
    }

    removeIngredientHandler = type => {
        this.setState( prevState => {
            const oldCount = prevState.ingredients[type];
            if(oldCount <=0) {
                return;
            }
            const newCount = oldCount - 1;
            let updatedIngredient = {...prevState.ingredients};
            updatedIngredient[type] = newCount;
            const oldPrice = prevState.totalPrice;
            const newPrice = prevState.totalPrice - INGREDIENT_PRICES[type];
            return({
                ingredients: updatedIngredient,
                totalPrice: newPrice
            });
        });
        this.updatePurchaseState();
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return(
            <Auxilery>
                <Burger ingredients={this.state.ingredients} />
                <Modal
                 show={this.state.purchasing}
                 purchaseCancelledHandler={this.purchaseCancelledHandler}>
                    <OrderSummary
                     ingredients={this.state.ingredients} 
                     totalPrice={this.state.totalPrice}
                     purchaseCancelledHandler={this.purchaseCancelledHandler}
                     purchaseContinueHandler={this.purchaseContinueHandler}/>
                </Modal>
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasabale={this.state.purchasabale}
                    ordered={this.purchaseHandler}
                />
            </Auxilery>
        );
    }
}

export default BurgerBuilder;

