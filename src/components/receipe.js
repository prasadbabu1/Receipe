import React, { useEffect, useState } from "react";
import ReceipeList from "./ReceipeList";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Receipe = () => {
  const [receipes, setReceipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const navigate = useNavigate();
  const dataFromFavourite = useSelector((state) => state.receipe);

  const APP_ID = "07e54806";
  const APP_KEY = "3a11a72ace0c0838615c1c65f6f7dfb8";
  const getReceipes = async () => {
    try {
      const response = await axios.get(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      setReceipes(response.data.hits);
    } catch (err) {
      console.log("error while fetching the response");
    }
  };
  const clearSearch = () => {
    setSearch("");
  };

  useEffect(() => {
    getReceipes();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
    setQuery(e.target.value);
  };

  const handelFavourite = () => {
    navigate("/favourite");
  };
  return (
    <div className="container">
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="Search by name"
        />
        <button className="search-button" onClick={clearSearch}>
          Clear
        </button>
      </form>
      <button onClick={handelFavourite} className="btn-favourite">
        Favourite Dishes
        {dataFromFavourite.length > 0 ? -dataFromFavourite.length : null}
      </button>
      <div className="receipes">
        {receipes.map((receipe, index) => {
          return <ReceipeList receipe={receipe} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Receipe;
