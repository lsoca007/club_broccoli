import React from "react";
import './style.css';

function Card(props) {
  return (
    <div className="card_contact">
      <div className="top_card">
        <h2 className="name_card">{props.name}</h2>
        <img
          className="circle-img"
          src= {props.img}
          alt="avatar_img"
        />
      </div>
      <div className="bottom">
        <p className="info">{props.tel}</p>
        <p className="info">{props.email}</p>
      </div>
    </div>
  );
}
export default Card;