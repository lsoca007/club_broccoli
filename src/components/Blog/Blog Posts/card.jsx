import React from "react";
/*import "./App.css";*/
import "./blog-post.css";

function Card(props) {
  return (
    <div className="blog_container">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <span>
        <em>By: {props.author}</em>
      </span>
    </div>
  );
}
export default Card;
