import React from "react";
import classes from "./Card.module.css";
import six from "../../../assets/tours/6.jpg";
import { Button } from "../";

const Card = ({
  location = "hello location",
  image = six,
  description = "lorem epsum lorem epsum",
  tags = "Agra, Kerala",
}) => {
  return (
    <>
      <div className={classes.card}>
        <div className={classes.header}>
          <img className={classes.img} src={image} alt="location" />
        </div>
        <div className={classes.info}>
          <p className={classes.title}>{location}</p>
          <p>{description}</p>
        </div>
        <div className={classes.footer}>
          <p className={classes.tag}>{tags}</p>
          <Button label="View More" fontSize="12px" padding="10px" />
        </div>
      </div>
    </>
  );
};

export default Card;
