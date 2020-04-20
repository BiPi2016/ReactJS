import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';

const Burger = props => {
    console.log(props.ingredients);
    let transformedIngredients = Object.entries(props.ingredients).map( ing => {
        let ingArr = [];
        for(let i=0; i< ing[1]; i++) {
            ingArr.push(<BurgerIngredient key={ing[0]+i} type={ing[0]} />);
        }
        return ingArr;
    })
    .reduce( (prevEl, el) => {
        return prevEl.concat(el);
    }, []);

    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients</p>
    }
        
    console.log(transformedIngredients);
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
             {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default Burger;