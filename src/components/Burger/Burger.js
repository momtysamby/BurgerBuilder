import React from 'react'
// import { withRouter } from 'react-router-dom'
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
    console.log(props)
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey}/>
            }) //Lecture 129
        }).reduce((arr, el) => {
            return arr.concat(el)
        }, []) //Lecture 130
        console.log(transformedIngredients)
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please add something</p>
    }

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    )
}

export default burger