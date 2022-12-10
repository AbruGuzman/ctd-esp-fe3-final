import React from "react";
import { Link, useParams } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";

export const TYPES = {
  ADD_FAV: "ADD_FAV",
  REMOVE_FAV: "REMOVE_FAV",
};
const Card = ({ name, username, id }) => {
  const {favState, favDispatch} = useContextGlobal();

  const params = useParams()
  let itemCard = data.find(item => item.id === params.item)

  const addFav = () => {
    favDispatch({
      type: TYPES.ADD_FAV,
      payload: { name, username, id },
    });
    alert("The dentist has been added to favorites.");
  };
  const removeFav = () => {
    favDispatch({
      type: TYPES.REMOVE_FAV,
      payload: id,
    });
    alert("The dentist has been remove from favorites.");
  };
  return (
    <div className="card">
      <Link key={id} to={`/dent/${id}`}>
        <img src="/images/doctor.jpg" alt='dent'/>
      <h3>{name}</h3>
      <h4>{username}</h4>
      </Link>
      
      {favState.find((i) => i.id === id) ? (
        <button onClick={removeFav} className="favButton">Delete fav</button>
      ) : (
        <button onClick={addFav} className="favButton">Add fav</button>)}
    </div>
    );
  };

export default Card;
