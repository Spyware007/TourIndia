import React from "react";
import classes from "./Card.module.css";

const Card = () => {
  return (
    <>
      <div className={(classes, book)}>
        <p>Hello</p>
        <div className={(classes, cover)}>
          <p>Hover Me</p>
        </div>
      </div>
    </>
  );
};

export default Card;
