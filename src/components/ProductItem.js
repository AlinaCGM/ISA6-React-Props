import React from "react";
import "./ProductItems.css";

export default function ProductItem(props) {
  return (
    <div className="item">
      <h3>Name:{props.title} </h3>
      <p> {props.price} sek</p>
      <img className="image" src={props.image} alt="" />
    </div>
  );
}
