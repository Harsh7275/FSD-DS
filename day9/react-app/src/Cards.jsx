import React from "react";
import "./Cards.css";
const Cards = (user, img_url, post, like, comment) => {
  return (
    <div id="card">
      <h1>User:{user}</h1>
      <img src={img_url} width={100} height={200} />
      <h2>Post:{post}</h2>
      <h2>Like:{like}</h2>
      <h2>Comment:{}comment</h2>
    </div>
  );
};

export default Cards;
