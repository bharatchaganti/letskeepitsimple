import React from "react";
import "../App.css";

function Coin({ title, link, description }) {
  return (
    <div className="coin">
      <h1>Name: {title}</h1>
      <h4>Website: <a href={link}> {link} </a>  </h4>
      <h6>Description: {description}</h6>
      
    </div>
  );
}

export default Coin;
