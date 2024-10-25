import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <>
      <div id="card">
        <img src={props.img} alt="photo" />
        <h2>{props.userName}</h2>
        <p>styding:{props.study}</p>
      </div>
    </>
  );
}

export default Card;
