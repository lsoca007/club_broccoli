import React from "react";
import Avatar from "../Avatar/Avatar";

function Entry(props){
  return (
    <div className="preview_card">
    <dt>
      <span className="avatar" role="img" aria-label="Tense Biceps">
        <img className="circle-img" src={props.avatar} alt="avatar_img" />
      </span>
      <span>{props.name}</span>
    </dt>
    <dd>
      {props.description}
    </dd>
  </div>
  );
}

export default Entry;