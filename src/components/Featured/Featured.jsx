import React from "react";
import { FeaturedData } from "../../assets/FeaturedData";
import Card from "../common/Card/Card";
import classes from "./Featured.module.css";

const Featured = () => {
  return (
    <>
      <div className={classes.featured_container}>
        <div className={classes.header}>
          <p className={classes.text1}>Featureds</p>
          <p className={classes.text2}>Most Popular Tours</p>
        </div>
        <div className={classes.cards_container}>
          {FeaturedData.map((place, i) => {
            const { location, image, description, tags } = place;
            return (
              <Card
                location={location}
                image={image}
                description={description}
                tags={tags}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Featured;
