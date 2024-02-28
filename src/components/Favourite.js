import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RemoveFavourite } from "../store/ReceipeSlice";

const Favourite = () => {
  const favouriteData = useSelector((state) => state.receipe);
  const dispatch = useDispatch();

  const handleRemove = (ind) => {
    dispatch(RemoveFavourite({ ind: ind }));
  };
  return (
    <div className="receipes">
      {favouriteData.map((receipe, index) => {
        return (
          <div className="receipe">
            <h1>{receipe.recipe.label}</h1>
            <img src={receipe.recipe.image} />
            <ol>
              {receipe.recipe.ingredients.map((ingredient) => {
                return <li>{ingredient.text}</li>;
              })}
            </ol>
            <p>Calories : {receipe.recipe.calories}</p>
            <button
              className="btn-remove"
              onClick={() => {
                handleRemove(receipe.recipe.label);
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Favourite;
