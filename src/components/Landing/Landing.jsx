import React from "react";
import { Button } from "../common/index";
import classes from "./Landing.module.css";

const Landing = () => {
  return (
    <>
      <div className={classes.landing}>
        <div className={classes.column1}>
          <p className={classes.para}>Explore Your Travel</p>
          <h1 className={classes.heading}>
            From Historical cities to natural splendours.
          </h1>
          <h2 className={classes.subheading}>
            India is a home to the finest architectural heritage, serene ghats,
            spectacular landscapes and largest tiger reserve
          </h2>
          <div className={classes.btn_container}>
            <a href="/explore">
              <Button
                label="Explore"
                padding="16px 32px"
                bgColor="#327c8e"
                color="#fff"
                fontSize="24px"
              />
            </a>
            <a href="/contact">
              <Button
                label="Contact Us"
                padding="16px 32px"
                bgColor="#fff"
                color="#000"
                fontSize="24px"
              />
            </a>
          </div>
        </div>
        <div className={classes.column2}></div>
      </div>
    </>
  );
};

export default Landing;
