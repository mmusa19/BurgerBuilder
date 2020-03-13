import React from "react";
import BurgerIngrediente from "./BurgerIngredient/BurgerIngredient";

import classes from "./Burger.module.css";

const Burger = props => {
  console.log(props);
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngrediente key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngrediente type="bread-top" />
      {transformedIngredients}
      <BurgerIngrediente type="bread-bottom" />
    </div>
  );
};

export default Burger;
