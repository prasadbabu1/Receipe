import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RemoveFavourite, addToFavourite } from "../store/ReceipeSlice";

const ReceipeList = ({ receipe, key }) => {
  const dispatch = useDispatch();
  const favourData = useSelector((state) => state.receipe);
  const wish = favourData.some(
    (item) => item.recipe.label === receipe.recipe.label
  );

  const handleClick = (label) => {
    console.log(wish);
    if (wish) {
      dispatch(RemoveFavourite(label));
    } else {
      dispatch(addToFavourite(receipe));
    }
  };
  return (
    <div className="receipe" key={key}>
      <h1>{receipe.recipe.label}</h1>
      <img src={receipe.recipe.image} />
      <ol>
        {receipe.recipe.ingredients.map((ingredient) => {
          return <li>{ingredient.text}</li>;
        })}
      </ol>
      <p>Calories : {receipe.recipe.calories}</p>
      <i
        className={
          wish ? "fa-xl fa-solid fa-heart" : "fa-xl fa-regular fa-heart"
        }
        onClick={() => {
          handleClick(receipe.recipe.label);
        }}
      ></i>
    </div>
  );
};

export default ReceipeList;
